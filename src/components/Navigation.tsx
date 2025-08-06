"use client"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useAuth, SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";
import { Building2, Users } from 'lucide-react'

import logo from "../../public/logo.png";
import { setUser } from "@/lib/features/authSlice";
import { IHRUser } from "@/types/types";
import Button from "./ui/Buttons";

export default function Navigation({
  children,
  user,
}: {
  children: React.ReactNode
  user?: IHRUser
}) {
  const { isSignedIn } = useAuth();
  const dispatch = useDispatch();

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
                <Button className="text-white text-sm font-semibold !bg-blue-600 !px-5 !py-1.7 !flex !items-center">
                  <Users className="mr-2" />
                  <span>Jobs & Candidates</span>
                </Button>
                <Button className=" text-sm font-semibold !px-5 !py-1.7 !flex !items-center">
                  <Building2 className="mr-2" />
                  <span>Create Job</span>
                </Button>
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
