import Image from "next/image";
import logo from "../../public/logo.png";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Navigation() {
  return (
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
      <div className="flex items-center gap-4 mr-4">
        <SignInButton>
          <button className="font-semibold text-gray-600 hover:text-black transition-colors duration-200">
            Login
          </button>
        </SignInButton>

        <SignUpButton>
          <button className="bg-blue-600 hover:bg-blue-700 text-gray-600 hover:text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            Register
          </button>
        </SignUpButton>
      </div>
    </div>
  );
}
