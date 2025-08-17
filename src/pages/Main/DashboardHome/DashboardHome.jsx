import DashboardHomeTable from "../../../Components/DashboardHomeTable";
import { Link } from "react-router-dom";
import { useAllUsersQuery } from "../../../redux/features/adminSlice";

const DashboardHome = () => {
      const { data: usersData, isLoading, isError } = useAllUsersQuery({
    page: 1,
    limit: 10000,
    total: 6,
    totalPages: 1,
    role: "SUB_ADMIN",
  });
  console.log(usersData?.meta?.users, 'kjskdljf');

  const users = usersData?.meta?.users;

  return (
    <div className="space-y-[24px]">
      <div className="flex   gap-3 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-32  gap-y-10 ">
          <div className=" flex items-center justify-center gap-6 border border-black px-[24px] py-[20px] rounded-lg space-y-3 bg-[#1B2A2F] w-96 md:w-full">
            <div className="text-center">
              <h3 className="text-[20px] text-[#B8BDBF]">
                {"Total number of Influencers"}
              </h3>
              <h3 className="text-[30px] font-extralight text-white text-center">
                {`${users?.INFLUENCER || 0}`} 
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 px-[24px] border border-black  py-[20px] rounded-lg space-y-3 bg-[#1B2A2F] w-96 md:w-full">
            <div className="text-center">
              <h3 className="text-[20px] text-[#B8BDBF]">
                {"Total number of Sub-Adims"}
              </h3>
              <h3 className="text-[30px] font-extralight text-white">{users?.SUB_ADMIN || 0}</h3>
            </div>
          </div>
        </div>
        <Link to={"/createAdmin-form"}>
          <button  className="bg-red text-white px-[30px] py-3">Create Admin</button>
        </Link>
      </div>

      
      {/* <BarChartComponent/> */}
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
