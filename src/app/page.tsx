import { currentUser } from '@clerk/nextjs/server'
import LandingPage from "@/components/LandingPage";
import { redirect } from 'next/navigation';


export default async function Home() {
  const user = await currentUser();
  // const dispatch = useDispatch();
  if (user) {
    const userId = user.id;
    const email = user.emailAddresses[0].emailAddress;
    const loginAPI = await fetch("http://localhost:3000/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, email }),
    });
    const response = await loginAPI.json();
    // redirect based on role
    // dispatch(setUser(response.res))
    if (response.success && response.res.role === 'candidate') {
      redirect('/candidate');
    } else if (response.success && response.res.role === 'hr') {
      redirect('/hr');
    }
  }
  return (
    <>
      <LandingPage />
    </>
  );
}
