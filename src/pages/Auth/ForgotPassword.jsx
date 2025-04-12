// import { Button, Checkbox, Input } from "antd";
// import Form from "antd/es/form/Form";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import image from "../../assets/images/forgot.png";
// import PageHeading from "../../Components/PageHeading";
// // import { useForgotPasswordMutation } from "../../redux/features/Auth/authApi";
// // import Swal from "sweetalert2";

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   // const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
//   const onFinish = async (values) => {
//     navigate(`/auth/verify-email`);
//     // try {
//     //   const response = await forgotPassword(values);
//     //   // console.log(response);
//     //   if (response?.data?.statusCode == 200) {
//     //     navigate(`/auth/verify-email/${values.email}`);
//     //   } else {
//     //     Swal.fire({
//     //       icon: "error",
//     //       title: "Failed!!",
//     //       text:
//     //         response?.data?.message ||
//     //         response?.error?.data?.message ||
//     //         "Something went wrong. Please try again later.",
//     //     });
//     //   }
//     // } catch (error) {
//     //   Swal.fire({
//     //     icon: "error",
//     //     title: "Failed!!",
//     //     text: "Something went wrong. Please try again later.",
//     //   });
//     // }
//   };
//   return (
//     <div className="min-h-[92vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8">
//       <div className="border-r-0 lg:border-r-2 border-primary w-[99%] p-[8%] lg:p-[12%] lg:pr-0">
//         <img src={image} alt="" />
//       </div>
//       <div className="lg:p-[5%] order-first lg:order-last">
//         <div className="w-full py-[64px] lg:px-[44px] space-y-8">
//           <div className="flex flex-col items-center lg:items-start">
//             <PageHeading backPath={"/auth"} title={"Forgot Password"} disbaledBackBtn={true} />
//             <p className="drop-shadow text-hash mt-4 text-center lg:text-start">
//               Enter your email address to get a verification code for resetting
//               your password. Please enter your email address to reset your
//               password.
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
//             <Form.Item
//               name="email"
//               rules={[
//                 {
//                   type: "email",
//                   message: "Please input valid email!",
//                 },
//                 {
//                   required: true,
//                   message: "Please input your email!",
//                 },
//               ]}
//             >
//               <Input size="large" placeholder="Enter your email" />
//             </Form.Item>
//             <div className="w-full flex justify-center pt-5">
//                 <Button
//                   // disabled={isLoading}
//                   type="primary"

//                   size="large"
//                   htmlType="submit"
//                   className="w-full px-2 bg-playground"
//                 >
//                   Get OTP
//                 </Button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import {  Mail } from "lucide-react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    navigate('/auth/verify-email')
    console.log({ email });
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
            <h2 className="text-xl font-medium">Forget Password</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="text-[#969D9F]" />
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

         
            <button
              type="submit"
              className="w-full bg-[#DC2626] hover:bg-red-700 focus:ring-4 focus:ring-red-900 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-colors duration-200"
            >
              Send OTP
            </button>

           
          </form>
        </div>
      </div>
    </div>
  );
}
