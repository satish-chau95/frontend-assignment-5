import React, { useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { Github, GitlabIcon, CloudIcon as Azure, GithubIcon as Bitbucket } from 'lucide-react';

export function LoginPage() {
  const { login } = useAuth();
  const [selectedOption, setSelectedOption] = useState("saas");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50 p-4">
      {/* Left side with stats - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex lg:w-1/2 flex-col space-y-8 p-8">
        {/* Stats Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="./logo.png"
              alt="CodeAnt AI Logo"
              className="h-8 w-8"
            />
            <h2 className="text-xl font-bold  w-278px h-27px">AI to Detect & Autofix Bad Code</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm text-gray-600">Language Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-gray-600">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm text-gray-600">Hours Saved</div>
            </div>
          </div>
        </div>

        {/* Issues Fixed Card */}
        <div className="bg-white rounded-xl shadow-sm border p-6 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <div className=" text-black font-bold w-85px h-20px">Issues Fixed</div>
              <div className="text-4xl font-bold">500K+</div>
            </div>
            <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm">
              <span>↑ 14%</span>
              <span className="text-xs">This week</span>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mb-8 -mr-8" />
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full max-w-md lg:w-1/2 px-4">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          {/* Logo and Title */}
          <div className="text-center space-y-6 mb-8">
            <div className="flex justify-center items-center gap-2">
            <img
                src="./logo.png"
                alt="CodeAnt AI Logo"
                className="h-8 w-8"
             />

              <span className="text-xl font-semibold">CodeAnt AI</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold">Welcome to CodeAnt AI</h1>
          </div>

          {/* Login Type Toggle */}
          <div className="flex rounded-lg border p-1 mb-6">
            <button
              className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                selectedOption === "saas"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedOption("saas")}
            >
              SAAS
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                selectedOption === "self-hosted"
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedOption("self-hosted")}
            >
              Self Hosted
            </button>
          </div>

          {/* Login Options */}
          <div className="space-y-3">
            {selectedOption === "saas" ? (
              <>
                <button
                  onClick={() => login("github")}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                  <span>Sign in with Github</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Bitbucket className="h-5 w-5 text-blue-500" />
                  <span>Sign in with Bitbucket</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <Azure className="h-5 w-5 text-blue-600" />
                  <span>Sign in with Azure DevOps</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <GitlabIcon className="h-5 w-5 text-orange-600" />
                  <span>Sign in with GitLab</span>
                </button>
              </>
            ) : (
              <>
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <GitlabIcon className="h-5 w-5 text-orange-600" />
                  <span>Self Hosted GitLab</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <img
                    src="./icon3.png"
                    alt="SSO"
                    className="h-5 w-5"
                  />
                  <span>Sign in with SSO</span>
                </button>
              </>
            )}
          </div>

          {/* Privacy Policy */}
          <p className="text-sm text-center text-gray-600 mt-6">
            By signing up you agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

