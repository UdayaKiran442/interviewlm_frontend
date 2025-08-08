import { redirect } from 'next/navigation';

import LandingPage from "@/components/LandingPage";
import { getCurrentUser } from '@/utils/getCurrentUser.utils';
import Navigation from '@/components/Navigation';


export default async function Home() {
  const user = await getCurrentUser()
  if (user) {
    const res = await fetch('http://localhost:3001/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Make this dynamic per request (no caching)
      cache: 'no-store',
      body: JSON.stringify({ email: user.email, userId: user.userId }),
    });
    const response = await res.json()
    // redirect based on role
    if (response.success && response.res.role === 'candidate') {
      redirect('/candidate');
    } else if (response.success && response.res.role === 'hr') {
      redirect('/hr');
    }
  }
  return (
    <>
      <Navigation>
        <LandingPage />
      </Navigation>
    </>
  );
}
