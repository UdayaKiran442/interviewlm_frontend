"use client"
import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useAuth, SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";
import { Building2, Target, Users } from 'lucide-react'

import logo from "../../public/logo.png";
import { setUser } from "@/lib/features/authSlice";
import { IHRUser } from "@/types/types";
import NavigationButton from "./ui/NavigationButtons";

export default function Navigation({
  children,
  user,
}: {
  children: React.ReactNode
  user?: IHRUser
}) {
  const { isSignedIn } = useAuth();
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<string>('jobs');

  if (user) {
    dispatch(setUser(user))
  }

  return (
    <div>
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex justify-center items-center gap-2">
          {/* logo */}
          <Image src={logo} alt="logo" width={50} height={50} />
          {/* title */}
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              InterviewLM
            </span>
          </h1>
        </div>
        {user && (
          <div className="flex items-center gap-4 mr-4">
            {user.role === 'hr' && (
              <>
                <NavigationButton className={activeButton === 'jobs' ? '!bg-blue-600 !py-2 hover:!bg-blue-500 !text-white border-2 !border-gray-200 !rounded-xl' : ''} onClick={() => setActiveButton('jobs')}>
                  <Users className="mr-2" />
                  <span>Jobs & Candidates</span>
                </NavigationButton>
                <NavigationButton className={activeButton === 'create-job' ? '!bg-blue-600 !py-2 hover:!bg-blue-500 !text-white border-2 !border-gray-200 !rounded-xl' : ''} onClick={() => setActiveButton('create-job')}>
                  <Building2 className="mr-2" />
                  <span>Create Job</span>
                </NavigationButton>
                <NavigationButton className={activeButton === 'validation' ? '!bg-blue-600 !py-2 hover:!bg-blue-500 !text-white border-2 !border-gray-200 !rounded-xl' : ''} onClick={() => setActiveButton('validation')}>
                  <Target className="mr-2" />
                  <span>Validation</span>
                </NavigationButton>
              </>
            )}
          </div>
        )}
        {isSignedIn ? (
          <SignOutButton>
            <button className="font-semibold text-gray-600 hover:text-black transition-colors duration-200">
              Logout
            </button>
          </SignOutButton>
        ) : (
          <div className="flex items-center gap-4 mr-4">
            <SignInButton>
              <button className="font-semibold text-gray-600 hover:text-black transition-colors duration-200">
                Login
              </button>
            </SignInButton>

            <SignUpButton>
              <button className=" text-gray-600 hover:text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                Register
              </button>
            </SignUpButton>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
