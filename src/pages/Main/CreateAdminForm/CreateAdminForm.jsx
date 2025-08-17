import { useState } from "react";
import { BsArrowLeft, BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCreateAdminMutation } from "../../../redux/features/useSlice";
import toast from "react-hot-toast";

const CreateAdminForm = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [createAdmin] = useCreateAdminMutation();


  // Initialize form data with values from the uploaded image
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    avatar: "", // Assuming avatar is a file or path
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("avatar", formData.avatar); // Assuming avatar is a file or path
    formDataToSend.append("gender", formData.gender);

    try {
      const res = await createAdmin(formDataToSend);

      toast.success(res?.data?.message || "Admin created successfully");
      router("/");
      console.log(res);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Link to="/">
          <BsArrowLeft className="text-white size-[20px]" />
        </Link>
        <h2 className="text-white text-xl font-semibold">Create Admin</h2>
      </div>
      <div className="bg-[#1b2a2f] p-6 rounded-lg shadow-lg">
        <h3 className="text-[#F87171] text-lg font-medium mb-4">
          Personal Information
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Set password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 text-white"
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="gender">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter gender"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="avatar">
              Avatar
            </label>
            {formData.avatar && (
              <img
                src={formData.avatar} // Assuming this is a valid image path or URL
                alt="Avatar"
                className="w-20 h-20 object-cover rounded-full"
              />
            )}
            <input
              type="file"
              id="avatar"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  avatar: e.target.files[0],
                }))
              }
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500 mt-2"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#DC2626] text-white p-3 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out"
            >
              {loading ? "Creating..." : "Create Admin"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdminForm;