import { ArrowLeft, Camera } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useUserProfileQuery } from "../../redux/features/useSlice";

export default function EditMyProfile() {
  const [name, setName] = useState("Chelofer");
  const [phoneNumber, setPhoneNumber] = useState("3000597212");
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=128&width=128");
  const fileInputRef = useRef();

     const {data} = useUserProfileQuery()
      const user = data?.data
      console.log(user)
    
      const IMAGE = import.meta.env.VITE_IMAGE_API

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Here you would typically send the data to your backend
    console.log("Saving changes:", { name, phoneNumber, profileImage });
    alert("Changes saved successfully!");
  };

  return (
    <div className="w-full p-6 bg-[#1a2329] text-white rounded-lg">
      {/* Header with back button */}
      <div className="flex items-center gap-2 mb-6">
        <Link to="/settings/profile" className="text-white hover:text-gray-300">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-medium text-white">
          Personal Information Edit
        </h1>
      </div>

      {/* Main content */}
      <div className="bg-[#1e2a33] p-6 rounded-lg">
        <h2 className="text-xl font-medium text-[#f05252] mb-6">
          Personal Information Edit
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Section */}
          <div className="bg-[#1e2a33] p-6 rounded-lg flex flex-col items-center w-full md:w-64">
            <div className="relative cursor-pointer" onClick={handleImageClick}>
              <div className="w-32 h-32 rounded-full border-4 border-[#f05252] overflow-hidden">
                <img
                  src={profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                <Camera size={32} className="text-white" />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-[#1e2a33] border border-[#2d3a44] rounded-md px-4 py-2 text-white"
              />
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleSaveChanges}
                className="bg-[#DC2626] text-white px-4 py-2 rounded hover:bg-[#e02424] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
