import { Eye, EyeOff, KeyRound } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    navigate("/auth");
    console.log({ password });
  };

  return (
    <div className="flex h-screen w-full bg-gray-900 text-white">
      {/* Left side with image and brand */}
      <div className="relative hidden md:flex md:w-1/2 items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sigin.png"
            alt="Background"
            className="object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 px-8 flex flex-col items-center justify-center pt-[200px]">
          <img src="/text.png" alt="" className="" />

          {/* <h1 className="text-5xl font-bold tracking-wider text-white italic">
            <span className="block">INTERNET</span>
            <span className="block">ORIGINALS</span>
          </h1> */}
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-800/60 backdrop-blur-sm p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <h2 className="text-xl font-medium">Reset Password</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <KeyRound className="size-6 text-[#969D9F]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full bg-gray-700/50 border border-gray-600 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 pr-10"
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <KeyRound className="size-6 text-[#969D9F]" />
                </div>
                <input
                  type={showPassword1 ? "text" : "password"}
                  id="password"
                  className="w-full bg-gray-700/50 border border-gray-600 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 pr-10"
                  placeholder="Re-Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-white"
                    onClick={() => setShowPassword1(!showPassword)}
                  >
                    {showPassword1 ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#DC2626] hover:bg-red-700 focus:ring-4 focus:ring-red-900 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-colors duration-200"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
