import { currentUser } from '@clerk/nextjs/server'

import LandingPage from "@/components/LandingPage";


export default async function Home() {
  const user = await currentUser();
  if (user) {
    const userId = user.id;
    const email = user.emailAddresses[0].emailAddress;
    const role = 'candidate';
    const loginAPI = await fetch("http://localhost:3000/v1/candidate/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, email, role }),
    });
    const response = await loginAPI.json();
    console.log(response);
  }
  return (
    <>
      <LandingPage />
    </>
  );
}
