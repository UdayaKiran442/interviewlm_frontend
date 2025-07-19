/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import Navigation from "./Navigation";
import { H1 } from "./ui/Typography";

export default function LandingPage(props: any) {
  const router = useRouter();
  if (props.user) {
    router.push("/hr");
  }

  return (
    <div>
      <Navigation />
      <div className="h-screen w-screen bg-[#F9FCFE] flex flex-col items-center">
        <div className="max-w-4xl text-center mx-auto">
          <div className="mt-20 justify-center flex">
            <p className="text-[0.75rem] font-bold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl px-2 max-w-fit">
              ✨ Next-Generation AI Recruitment Platform
            </p>
          </div>
          <div className="mt-6 leading-tight mb-6 text-center">
            <H1>
              Revolutionize Your
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Tech Hiring Process
              </span>
            </H1>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const { user } = useUser();

  return { props: { user } };
};
