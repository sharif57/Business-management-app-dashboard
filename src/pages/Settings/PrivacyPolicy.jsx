import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { usePrivacyGetQuery } from "../../redux/features/conditionSlice";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const {data} = usePrivacyGetQuery();
  return (
    <>
      <div onClick={() => navigate(-1)} className="flex items-center gap-2 text-xl text-white">
        <FaAngleLeft />
        <h1>Privacy & Policy</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-[#1b2a2f]">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <h3 className="text-2xl text-[#EF4444] mb-4 border-b-2 border-lightGray/40 pb-3 pl-16">
            Privacy & Policy
          </h3>
          <div className="w-full px-16">
            <div className="space-y-5 text-white text-sm" dangerouslySetInnerHTML={{ __html: data?.data }}>
              
            </div>
            <div className="flex justify-end pt-4">
              <Button
                onClick={() => navigate(`edit`)}
                size="large"
                type="primary"
                className="px-8 bg-[#DC2626] text-white hover:bg-black/90 rounded-full font-semibold w-1/4"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
