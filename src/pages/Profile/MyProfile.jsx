

import { PencilIcon } from "lucide-react";
import { FaAngleLeft } from "react-icons/fa6";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { Link, useNavigate } from "react-router-dom";

export default function MyProfile() {
  const navigate = useNavigate()
  return (
    <div>
      <Link to={'/settings'} className="flex items-center gap-2 text-xl text-white">
        <FaAngleLeft />
        <h1>Personal information</h1>
      </Link>
      <div className="w-full mt-8 p-6 bg-[#1a2329] text-white rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-medium text-[#f05252]">
            Personal Information
          </h1>
          <button
            onClick={(e) => navigate(`edit`)}
            className="bg-[#DC2626] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#e02424] transition-colors"
          >
            <PencilIcon size={16} />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Section */}
          <div className="bg-[#1e2a33] p-6 rounded-lg flex flex-col items-center w-full md:w-64">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-[#f05252] overflow-hidden">
                <img
                  src={dashProfile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300">Profile</p>
              <p className="text-lg font-semibold">Admin</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex-1 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value="Chelofer"
                readOnly
                className="w-full bg-[#1e2a33] border border-[#2d3a44] rounded-md px-4 py-2 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value="alkhahlaksaikgkgaik@hmail.com"
                readOnly
                className="w-full bg-[#1e2a33] border border-[#2d3a44] rounded-md px-4 py-2 text-white"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value="3000597212"
                readOnly
                className="w-full bg-[#1e2a33] border border-[#2d3a44] rounded-md px-4 py-2 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
