/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ArrowRight, Play } from "lucide-react";

import Navigation from "./Navigation";

import { H1 } from "./ui/Typography";
import Button from "./ui/Buttons";

export default function LandingPage(props: any) {
  const router = useRouter();
  if (props.user) {
    router.push("/hr");
  }

  return (
    <div>
      <Navigation />
      <div className="h-screen w-screen bg-[#F9FCFE] flex flex-col items-center">
        {/* Hero Section */}
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
          <div className="mt-6 leading-tight mb-6 text-center">
            <p className="text-gray-600 font-light text-2xl">
              Streamline recruitment with AI-powered interviews, automated
              screening, and intelligent candidate matching. Hire engineers{" "}
              <strong>
                <span className="font-extrabold">10x</span>{" "}
              </strong>
              faster using Gen AI.
            </p>
          </div>
          <div className="flex justify-center gap-3.5">
            <Button className="!bg-blue-600 hover:!bg-blue-700 !text-white font-extrabold flex items-center">
              <Play className="mr-2 flex justify-center items-center" />
              Watch Video
            </Button>
            <Button className="!bg-white hover:!bg-gray-100 !text-gray-600 font-extrabold flex">
              Schedule Demo
              <ArrowRight className="ml-2 flex justify-center items-center" />
            </Button>
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
