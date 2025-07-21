/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ArrowRight, Brain, Clock, Play, Shield, Target } from "lucide-react";

import Navigation from "./Navigation";

import { H1, H2 } from "./ui/Typography";
import Button from "./ui/Buttons";
import { InterviewLMCard, TraditionalHiringCard } from "./ComparisionCard"; //TraditionalHiringCard from "./ComparisionCard";
import FeatureCard from "./FeatureCard";

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
        {/* Comparison section */}
        <div className="mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2">
              <H2 className="!text-[#121827]">Traditional Hiring</H2>
              <H2 className="!text-gray-400">vs</H2>
              <H2 className="!text-[#121827]">InterviewLM</H2>
            </div>
            <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
              Why choose InterviewLM over traditional hiring methods
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16 w-full">
            <div className="w-full md:w-1/2 lg:w-[25%]">
              <TraditionalHiringCard />
            </div>
            <div className="w-full md:w-1/2 lg:w-[75%]">
              <InterviewLMCard />
            </div>
          </div>
        </div>
        {/* features */}
        <div className="mt-20">
          <H2 className="text-center">
            Powerful Features for Modern Recruitment
          </H2>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto text-center">
            Why choose InterviewLM over traditional hiring methods
          </p>
          {/* feature card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 p-3">
            <FeatureCard
              icon={<Brain />}
              title="AI-Powered Interviews"
              description="Intelligent screening with dynamic questioning and real-time assessment"
              className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
            />
            <FeatureCard
              icon={<Clock />}
              title="Automated Workflows"
              description="Streamlined processes from application to final decision"
              className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
            />
            <FeatureCard
              icon={<Shield />}
              title="Bias-Free Screening"
              description="Fair and consistent evaluation criteria for all candidates"
              className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
            />
            <FeatureCard
              icon={<Target />}
              title="Precise Matching"
              description="Gen AI based resume screening and candidate-job fit analysis"
              className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
            />
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
