// import { Button, Checkbox, Input } from "antd";
// import Form from "antd/es/form/Form";
// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import image from "../../assets/images/verify.png";
// import PageHeading from "../../Components/PageHeading";
// import OTPInput from "react-otp-input";
// import Swal from "sweetalert2";
// // import { useVerifyEmailMutation } from "../../redux/features/Auth/authApi";

// const VerifyEmail = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [otp, setOtp] = useState("");
//   // const [mutation, { isLoading }] = useVerifyEmailMutation();
//   const onFinish = async (values) => {
//     if (isNaN(otp) || otp.length < 4) {
//       return Swal.fire({
//         icon: "error",
//         title: "Failed",
//         text: "Please enter 4 digits OTP number!!.",
//       });
//     }
//     navigate(`/auth/reset-password`);
//     // try {
//     //   const response = await mutation({
//     //     email: id,
//     //     code: Number(otp),
//     //   });
//     //   // console.log(response);
//     //   if (response?.data?.statusCode == 200) {
//     //     localStorage.setItem("verify-token", response?.data?.data);
//     //     navigate(`/auth/reset-password`);
//     //   } else {
//     //     Swal.fire({
//     //       icon: "error",
//     //       title: "failed!",
//     //       text:
//     //         response?.data?.message ||
//     //         response?.error?.data?.message ||
//     //         "Something went wrong. Please try again later.",
//     //     });
//     //   }
//     // } catch (error) {
//     //   Swal.fire({
//     //     icon: "error",
//     //     // title: "Login Failed , Try Again...",
//     //     text: "Something went wrong. Please try again later.",
//     //   });
//     // }
//   };
//   return (
//     <div className="min-h-[92vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8">
//       <div className="lg:border-r-2 border-primary mx-auto w-[90%] lg:p-[8%]">
//         <img src={image} alt="" />
//       </div>
//       <div className="lg:p-[5%] order-first lg:order-last">
//         <div className="w-full py-[64px] lg:px-[44px] space-y-5">
//           <div className="flex flex-col items-center lg:items-start">
//             <PageHeading
//               backPath={"/auth/forgot-password"}
//               title={"Verify Email"}
//               disbaledBackBtn={true}
//             />
//             <p className=" drop-shadow text-hash mt-5 text-center lg:text-left">
//               Please check your email. We have sent a code to contact @gmail.com
//             </p>
//           </div>
//           <Form
//             name="normal_login"
//             layout="vertical"
//             initialValues={{
//               remember: true,
//             }}
//             onFinish={onFinish}
//           >
//             <div className="py-3 text-2xl font-semibold flex justify-center">
//               <OTPInput
//                 value={otp}
//                 onChange={setOtp}
//                 numInputs={4}
//                 inputStyle={{
//                   height: "70px",
//                   width: "70px",
//                   margin: "20px",
//                   // background: "#ECE8F1",
//                   border: "1px solid #61D0FF",
//                   // marginRight: "auto",
//                   outline: "none",
//                   borderRadius: "16px",
//                   color: "black",
//                 }}
//                 renderSeparator={<span> </span>}
//                 renderInput={(props) => <input {...props} />}
//               />
//             </div>
//             <div className="w-full flex justify-center pt-5">
//                 <Button
//                   // disabled={isLoading}
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   className="w-full px-2 "
//                 >
//                   Verify Email
//                 </Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const navigate = useNavigate()
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = verificationCode.join("");
    navigate(`/auth/reset-password`)

    console.log("Verification code:", code);
    // Handle verification logic here
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
