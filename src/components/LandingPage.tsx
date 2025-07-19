"use client";

import { SignInButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function LandingPage(props: any) {
  const router = useRouter();
  if(props.user) {
    router.push('/hr');
  }  

  return (
    <div> 
        <h1>Welcome</h1>
        <SignInButton />
    </div>
 
  );
};

export const getStaticProps = (async () => {
  const {user} = useUser();
 
  return { props: { user } }
})
