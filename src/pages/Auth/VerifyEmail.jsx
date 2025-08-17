
import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useVerifyEmailMutation } from "../../redux/features/authSlice";
import toast from "react-hot-toast";

export default function VerifyEmail() {
  const navigate = useNavigate()

    const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  console.log(email);

  const [verifyEmail]=useVerifyEmailMutation()

  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value.slice(0, 1); // Only take the first character

    setVerificationCode(newCode);

    // Move to next input if current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (!/^\d+$/.test(pastedData)) return; // Only allow numbers

    const digits = pastedData.split("").slice(0, 6);
    const newCode = [...verificationCode];

    digits.forEach((digit, index) => {
      if (index < 6) {
        newCode[index] = digit;
      }
    });

    setVerificationCode(newCode);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newCode.findIndex((val) => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const code = verificationCode.join("");

  try {
    // ✅ Wait for API response
    const res = await verifyEmail({ email, otp: code });

    console.log(res);

    if (res?.data?.success) {
      toast.success(res?.data?.message || "Email verified successfully");
      localStorage.setItem("resetToken", res?.data?.data?.reset_token);
      navigate(`/auth/reset-password`);
    } else {
      toast.error(res?.error?.data?.message || "Verification failed");
    }
  } catch (error) {
    console.log(error);

    // ✅ Extract proper backend error
    const errorMsg =
      error?.data?.message ||
      error?.response?.data?.errorMessages?.[0]?.message ||
      error?.message ||
      "Something went wrong";

    toast.error(errorMsg);
  }

  console.log("Verification code:", code);
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
          <div className="flex items-center mb-8">
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
            <h2 className="text-xl font-medium">Verify Email</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-between mb-6">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 bg-gray-700/50 border border-gray-600 text-white text-center text-lg rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  autoFocus={index === 1} // Focus the second input since the first one is pre-filled
                />
              ))}
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
