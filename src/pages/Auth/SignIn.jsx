import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    navigate('/auth/verify-email')
    console.log({ email, password, rememberMe });
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
            <h2 className="text-xl font-medium">Sign In</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700/50 border border-gray-600 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
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

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link  to={'/auth/forgot-password'} className="flex items-center">
                <p className="ml-2 text-sm text-gray-300 hover:text-blue-400 hover:underline ">Forget Password</p>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#DC2626] hover:bg-red-700 focus:ring-4 focus:ring-red-900 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-colors duration-200"
            >
              Sign In
            </button>

           
          </form>
        </div>
      </div>
    </div>
  );
}
