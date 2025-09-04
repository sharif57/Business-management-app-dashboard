import { Button, Spin, Alert } from "antd";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { usePrivacyGetQuery, useUpdatePrivacyMutation } from "../../redux/features/conditionSlice";
import toast from "react-hot-toast";

// Import and register custom font sizes
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["14px", "16px", "18px"];
Quill.register(Size, true);

const modules = {
  toolbar: {
    container: [
      [{ size: ["14px", "16px", "18px"] }],
      [{ color: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["image", "link"],
      [{ list: "bullet" }],
    ],
    handlers: {
      align: function (value) {
        this.quill.format("align", value);
      },
    },
  },
};

const formats = [
  "size",
  "color",
  "align",
  "bold",
  "italic",
  "underline",
  "link",
  "image",
  "list",
];

const EditPrivacyPolicy = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = usePrivacyGetQuery();
  const [updatePrivacy, { isLoading: isUpdating }] =
    useUpdatePrivacyMutation();
  const [content, setContent] = useState("");

  // Initialize content with API data
  useEffect(() => {
    if (data?.data) {
      setContent(data.data);
    }
  }, [data]);

  // Handle update submission
  const handleUpdate = async () => {
    if (!content) {
      toast.error("Privacy policy content cannot be empty.");
      return;
    }

    try {
      const response = await updatePrivacy({ content , pageName: "privacy-policy" }).unwrap();
      toast.success(response?.message || "Privacy policy updated successfully!");
      navigate(-1); // Adjust route as needed
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update privacy policy.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 text-xl text-white mb-6">
        <FaAngleLeft
          className="cursor-pointer"
          onClick={() => navigate(-1)} // Navigate back
        />
        <h1>Privacy & Policy</h1>
      </div>
      <div className="rounded-lg py-4 border border-gray-600 shadow-lg bg-[#1b2a2f]">
        <div className="space-y-6 min-h-[83vh] rounded-2xl">
          <h3 className="text-2xl text-[#EF4444] mb-4 border-b-2 border-gray-500 pb-3 pl-8">
            Privacy & Policy Edit
          </h3>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-4">
              <Spin size="large" />
            </div>
          )}

          {/* Error State */}
          {isError && (
            <Alert
              message="Error"
              description={error?.data?.message || "Failed to fetch privacy policy."}
              type="error"
              showIcon
              className="mx-8 mb-4"
            />
          )}

          {/* Editor */}
          {!isLoading && !isError && (
            <div className="px-8">
              <div className="border border-gray-400 rounded-md">
                <ReactQuill
                  placeholder="Enter your updated privacy policy..."
                  theme="snow"
                  value={content}
                  onChange={(value) => setContent(value)}
                  modules={modules}
                  formats={formats}
                  className="custom-quill-editor"
                />
              </div>
            </div>
          )}

          {/* Update Button */}
          <div className="flex justify-end pt-8 pr-8">
            <Button
              onClick={handleUpdate}
              size="large"
              type="primary"
              loading={isUpdating}
              disabled={isLoading || isUpdating || !content}
              className="px-8 bg-[#DC2626] text-white hover:bg-black/90 rounded-full font-semibold w-1/4"
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </div>

      {/* Custom CSS for ReactQuill */}
      <style jsx>{`
        .custom-quill-editor .ql-editor {
          color: #ffffff;
          min-height: 300px;
          background-color: #2d3b40;
          border-radius: 0 0 6px 6px;
        }
        .custom-quill-editor .ql-toolbar {
          background-color: #1b2a2f;
          border-radius: 6px 6px 0 0;
        }
        .custom-quill-editor .ql-container {
          border: none !important;
        }
        .ql-picker-label,
        .ql-picker-item {
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
};

export default EditPrivacyPolicy;