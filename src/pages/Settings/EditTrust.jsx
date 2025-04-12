import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Quill from "quill";

// Import 'size' style attributor
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["14px", "16px", "18px"]; // Custom font sizes
Quill.register(Size, true);

const modules = {
    toolbar: {
        container: [
            [{ size: ["14px", "16px", "18px"] }], // Use whitelisted sizes
            [{ color: [] }], // Text color dropdown
            ["bold", "italic", "underline", 'strike'], // Formatting options
            [{ align: [] }],
            ["image", "link"],
            [{ list: 'bullet' }],
        ],
        handlers: {
            align: function (value) {
                this.quill.format('align', value);
            },
        },
    },
};

const formats = [
    "size", // Custom font sizes
    "color",
    "align",
    "bold",
    "italic",
    "underline",
    "link",
    "image",
    "list",
];
const EditTrust = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState("");
    console.log(content);

    return (
        <>
            <div className="flex items-center gap-2 text-xl text-white">
                <FaAngleLeft />
                <h1>Trust & Safety </h1>
            </div>
            <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-[#1b2a2f]">
                <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
                    <h3 className="text-2xl text-[#EF4444] mb-4 border-b-2 border-lightGray/40 pb-3 pl-16">
                        Trust & Safety Edit
                    </h3>
                    <div className="w-full px-16">
                        <div className="h-full border border-gray-400 rounded-md">
                            <div className="ql-toolbar-container h-56">
                  
                                <ReactQuill
                                    placeholder="Enter your update terms & conditions..."
                                    theme="snow"
                                    value={content}
                                    onChange={(value) => setContent(value)}
                                    modules={modules}
                                    formats={formats}
                                    className="custom-quill-editor text-white"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-end pt-8 pr-16">
                        <Button
                            onClick={(e) => navigate(`edit`)}
                            size="large"
                            type="primary"
                            className="px-8 bg-[#EF4444] text-white hover:bg-black/90 rounded-full font-semibold w-1/4"
                        >
                            Update
                        </Button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default EditTrust;
