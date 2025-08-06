import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server'

import LandingPage from "@/components/LandingPage";
import { loginUser } from '@/actions/auth';


export default async function Home() {
  const user = await currentUser();
  if (user) {
    const userId = user.id;
    const email = user.emailAddresses[0].emailAddress;
    const response = await loginUser({ userId, email });
    // redirect based on role
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
