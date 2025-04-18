import { FaArrowLeft, FaEye, FaLock } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center text-white ">
      <div className="bg-[#19262b] rounded-lg shadow-lg mt-8 w-[610px] h-[700px] mx-auto py-10 px-8">
        <div className="flex flex-col  w-full max-w-md mx-auto mt-10 p-4 rounded-lg space-y-4">
          <div className="flex items-center gap-2">
            <FaArrowLeft />
            <h1>Change password</h1>
          </div>
          <h1>Your password must be 8-10 character long.</h1>
          {/* Input Fields */}
          <div className="flex flex-col w-full space-y-4">
            {[
              {
                label: "Enter old password",
                placeholder: "Enter old password",
              },
              { label: "Set new password", placeholder: "Set new password" },
              {
                label: "Re-enter new password",
                placeholder: "Re-enter new password",
              },
            ].map(({ label, placeholder }, index) => (
              <div key={index}>
                <h1 className="mb-3">{label}</h1>
                <div key={index} className="relative flex items-center">
                  {/* Lock Icon */}
                  <MdLockOutline className="absolute left-3 text-[#DC2626] " />
                  {/* Input Field */}
                  <input
                    type="password"
                    placeholder={placeholder}
                    className="w-full pl-10 pr-10 py-2 border border-black rounded-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  {/* Eye Icon */}
                  <FaRegEyeSlash className="absolute right-3  cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

        

          {/* Update Password Button */}
          <button className="mt-6 w-full bg-[#DC2626] text-white py-2 rounded-lg ">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
