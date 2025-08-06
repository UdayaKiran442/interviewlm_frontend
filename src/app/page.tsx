import { redirect } from 'next/navigation';

import LandingPage from "@/components/LandingPage";
import { loginUserAPI } from '@/actions/auth';
import { getCurrentUser } from '@/utils/getCurrentUser.utils';


export default async function Home() {
  const user = await getCurrentUser()
  if (user) {
    const response = await loginUserAPI({ userId: user.userId, email: user.email });
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
