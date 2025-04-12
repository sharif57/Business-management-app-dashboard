import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateAdminForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic to submit the form data to an API or backend
  };

  return (
    <div className="w-full mx-auto  ">
      <div className="flex items-center item-center gap-3 mb-4">
        <Link to={'/'}>
          <BsArrowLeft className="text-white size-[20px]" />
        </Link>
        <h2 className="text-white text-xl font-semibold ">Create Admin</h2>
      </div>
      <div className="bg-[#1b2a2f] p-6 rounded-lg shadow-lg ">
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
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Set password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <div className="flex items-center justify-center ">
              <button
                type="submit"
                className="bg-[#DC2626] text-white p-3 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out"
              >
                Create Admin
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdminForm;
