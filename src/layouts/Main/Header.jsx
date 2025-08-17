import {  useNavigate } from "react-router-dom";
import { Badge } from "antd";
import profileImage from "../../assets/images/dash-profile.png";
import { TbBellRinging } from "react-icons/tb";
import { useUserProfileQuery } from "../../redux/features/useSlice";


const Header = () => {
  const navigate = useNavigate();

  const {data} = useUserProfileQuery({limit: 1, page: 1})
  const user = data?.data

  const IMAGE = import.meta.env.VITE_IMAGE_API


  return (

    <div className="w-full h-[88px] flex justify-between items-center border border-gray-500 rounded-lg py-[16px] px-[32px] shadow-lg bg-[#1B2A2F] text-[#E8EAEA]">
      <div className="text-start space-y-0.5">
        <p className="text-sm md:text-xl font-light">
          {`Welcome, ${user?.name}`}
        </p>
        <p className="text-sm md:text-xl">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">
        <div
          onClick={() => navigate("/notifications")}
          className="relative flex items-center "
        >
          <Badge style={{ backgroundColor: "#000000", width: '20px', height: '20px', objectFit: 'contain' }} count={1}>
            <TbBellRinging
              style={{ cursor: "pointer" }}
              className={` w-6 h-6 rounded-full shadow-sm  font-bold transition-all text-[#E8EAEA]`}
            />
          </Badge>
        </div>
        <div className="flex items-center">
          <div>
            <img src={ `${IMAGE}${user?.avatar}`|| profileImage} alt="" className="rounded-full h-[42px] w-[42px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
