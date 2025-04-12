// import React, { useState } from "react";
// import { Button, DatePicker, Input, Table } from "antd";
// import { FiAlertCircle } from "react-icons/fi";
// import DashboardModal from "../../../Components/DashboardModal";
// import { IoSearch } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import exlamIcon from "../../../assets/images/exclamation-circle.png";

// const Users = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({});

//   const showModal = (data) => {
//     setIsModalOpen(true);
//     setModalData(data);
//   };

//   const columns = [
//     {
//           title: "#SL",
//           dataIndex: "transIs",
//           key: "transIs",
//           render: (text) => <a>{text}</a>,
//         },
//         {
//           title: "Name",
//           dataIndex: "name",
//           key: "name",
//         },
//         {
//           title: "Email",
//           dataIndex: "Email",
//           key: "Email",
//         },
//         {
//           title: "Phone Number",
//           key: "Phone",
//           dataIndex: "Phone",
//         },
//         {
//           title: "Action",
//           key: "Review",
//           aligen: 'center',
//           render: (_, data) => (
//             <div className="  items-center justify-around textcenter flex " >
//               {/* Review Icon */}
//               <img src={exlamIcon} alt="" className="btn  px-3 py-1 text-sm rounded-full cursor-pointer" onClick={() => showModal(data)} />
//               {/* <Link to={'/reviews'} className="btn bg-black text-white px-3 py-1 text-sm rounded-full">

//                 View
//               </Link> */}
//             </div>
//           ),
//         },
//   ];

//   const data = [];
//   for (let index = 0; index < 20; index++) {
//     data.push({
//       transIs: `${index + 1}`,
//       name: "Henry",
//       Email: "sharif@gmail.com",
//       Phone: "+12746478994",
//       Review: "See Review",
//       date: "16 Apr 2024",
//       _id: index,
//     });
//   }

//   return (
//     <div className="rounded-lg border py-4 border-black mt-8 recent-users-table">
//       <h3 className="text-2xl text-black mb-4 pl-2">Recent Users</h3>
//       {/* Ant Design Table */}
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={{ position: ["bottomCenter"] }}
//         className="rounded-lg"
//       />

//       {/* Dashboard Modal */}
//       <DashboardModal
//         isModalOpen={isModalOpen}
//         setIsModalOpen={setIsModalOpen}
//         maxWidth="500px"
//       >
//         <div>
//           <h2 className="text-lg text-center mb-4">User Details</h2>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>#SL</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>User Name</p>
//             <p>{modalData.name}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Email</p>
//             <p>{modalData.Email}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Mobile Phone</p>
//             <p>{modalData.Phone}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Service</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Date</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Time</p>
//             <p>{modalData.transIs}</p>
//           </div>
//           <div className="flex justify-between mb-2 text-gray-600">
//             <p>Amount</p>
//             <p>{modalData.transIs}</p>
//           </div>

//         </div>
//       </DashboardModal>
//     </div>
//   );
// };

// export default Users;

// export default function Influencers() {
//   return (
//     <div>

//     </div>
//   )
// }

// import { useState } from "react";
// import { Check, ChevronLeft, ChevronRight } from "lucide-react";
// import { Table } from "antd";

// export default function Influencers() {
//   const [activeTab, setActiveTab] = useState("pending");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showAssignModal, setShowAssignModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [selectedInfluencer, setSelectedInfluencer] = useState(null);

//   // Mock data for influencers
//   const influencers = Array(9)
//     .fill(null)
//     .map((_, index) => ({
//       id: index + 1,
//       name: "Jane Cooper",
//       handle: "@janecooper",
//       followers: "85k",
//       location: "Toronto, Canada",
//     }));

//   const totalPages = 4;

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const handleAssign = (name) => {
//     setSelectedInfluencer(name);
//     setShowAssignModal(true);
//   };

//   const handleConfirmAssign = () => {
//     setShowAssignModal(false);
//     setShowSuccessModal(true);

//     setTimeout(() => {
//       setShowSuccessModal(false);
//     }, 2000);
//   };

//   const handleDecline = (id) => {
//     // In a real app, you would update the status in your data store
//     console.log(`Declined influencer with ID: ${id}`);
//   };

//   const columns = [
//     {
//       title: "Image",
//       dataIndex: "transIs",
//       key: "transIs",
//       render: (_, data) => (
//         <div className="  items-center justify-around textcenter flex ">
//           <img
//             src={"/company.png"}
//             alt=""
//             className="btn  px-3 py-1 text-sm  cursor-pointer"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Task",
//       dataIndex: "task",
//       key: "task",
//     },
//     {
//       title: "Budget",
//       key: "budget",
//       dataIndex: "budget",
//     },
//     {
//       title: "Payout Deadline",
//       key: "payout",
//       dataIndex: "payout",
//     },
//     {
//       title: "Action",
//       key: "Review",
//       aligen: "center",
//       render: (_, data) => (
//         <div className="  items-center justify-around textcenter flex">
//           <button
//             onClick={() => showAssignModal(data)}
//             className="btn bg-[#DC2626] text-white px-[42px] py-[10px] text-sm rounded"
//           >
//             View Details
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const data = [];
//   for (let index = 0; index < 20; index++) {
//     data.push({
//       transIs: `${index + 1}`,
//       name: "Henry",
//       task: "Promote event on Instagram",
//       budget: "$300",
//       payout: "In 90 Days",
//       date: "16 Apr 2024",
//       _id: index,
//     });
//   }

//   return (
//     <div className=" bg-gray-900 text-white">
//       <div className="w-full mx-auto">
//         {/* Tabs */}
//         <div className="flex mb-4">
//           <button
//             className={`px-6 py-2 rounded-t-md ${
//               activeTab === "approved"
//                 ? "bg-[#DC2626] text-white"
//                 : "bg-gray-800 text-gray-400"
//             }`}
//             onClick={() => handleTabChange("approved")}
//           >
//             Approved
//           </button>
//           <button
//             className={`px-6 py-2 rounded-t-md ${
//               activeTab === "pending"
//                 ? "bg-[#DC2626] text-white"
//                 : "bg-gray-800 text-gray-400"
//             }`}
//             onClick={() => handleTabChange("pending")}
//           >
//             Pending
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto w-full">
//           <Table
//             columns={columns}
//             dataSource={data}
//             pagination={{ position: ["bottomCenter"] }}
//             className="rounded-lg"
//           />
//           <table className="w-full border-collapse ">
//             <thead className="bg-[#DC2626] ">
//               <tr>
//                 <th className="bg-red-600 text-white text-left py-3 px-20">
//                   Social Handle
//                 </th>
//                 <th className="bg-red-600 text-white text-left py-3 px-20">
//                   Name
//                 </th>
//                 <th className="bg-red-600 text-white text-left py-3 px-20">
//                   Followers
//                 </th>
//                 <th className="bg-red-600 text-white text-left py-3 px-20">
//                   Location
//                 </th>
//                 <th className="bg-red-600 text-white text-left py-3 px-20">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="">
//               {influencers.map((influencer) => (
//                 <tr key={influencer.id} className="border-b border-gray-800">
//                   <td className="py-3  px-20">{influencer.handle}</td>
//                   <td className="py-3  px-20">{influencer.followers}</td>
//                   <td className="py-3  px-20">{influencer.name}</td>
//                   <td className="py-3  px-20">{influencer.location}</td>
//                   <td className="py-3  px-20">
//                     {activeTab === "pending" ? (
//                       <button
//                         className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
//                         // onClick={() => handleAssign(influencer.name)}
//                       >
//                         Assign a Campaign
//                       </button>
//                     ) : (
//                       <div className="flex space-x-2">
//                         <button
//                           className="bg-gray-200 border border-[#DC2626] hover:bg-gray-300 text-gray-800 px-4 py-1 rounded text-sm"
//                           onClick={() => handleDecline(influencer.id)}
//                         >
//                           Decline
//                         </button>
//                         <button
//                           className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
//                           // onClick={() => handleApprove(influencer.id)}
//                           onClick={() => handleAssign(influencer.name)}
//                         >
//                           Approve
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-center mt-6 space-x-2">
//           <button
//             className="px-3 py-1 bg-gray-800 text-white rounded flex items-center"
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft size={16} />
//             <span className="ml-1">Back</span>
//           </button>

//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               className={`w-8 h-8 rounded flex items-center justify-center ${
//                 currentPage === page
//                   ? "bg-red-600 text-white"
//                   : "bg-gray-800 text-white"
//               }`}
//               onClick={() => handlePageChange(page)}
//             >
//               {page}
//             </button>
//           ))}

//           <button
//             className="px-3 py-1 bg-gray-800 text-white rounded flex items-center"
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             <span className="mr-1">Next</span>
//             <ChevronRight size={16} />
//           </button>
//         </div>
//       </div>

//       {/* Assign Modal */}
//       {showAssignModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-gray-900 p-6 rounded-md max-w-md w-full">
//             <p className="text-center mb-4">Are you want to assign</p>
//             <div className="flex items-center justify-center mb-2">
//               <div className="w-8 h-8 bg-gray-700 rounded-full mr-2"></div>
//               <span className="font-medium">Sophia Carter</span>
//               <span className="mx-2">to</span>
//             </div>
//             <div className="flex items-center justify-center mb-6">
//               <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
//               <span>McDonald's New Menu Launch</span>
//             </div>
//             <div className="flex justify-center space-x-4">
//               <button
//                 className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//                 onClick={() => setShowAssignModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-6 py-2 bg-[#DC2626] text-white rounded hover:bg-red-700"
//                 onClick={handleConfirmAssign}
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-gray-900 p-6 rounded-md max-w-md w-full">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
//                 <Check className="text-[#DC2626]" size={40} />
//               </div>
//             </div>
//             <p className="text-center mb-2">You assigned</p>
//             <div className="flex items-center justify-center mb-2">
//               <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
//               <span className="font-medium">Sophia Carter</span>
//               <span className="mx-1">to</span>
//             </div>
//             <div className="flex items-center justify-center">
//               <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
//               <span>McDonald's New Menu Launch</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Table, Modal } from "antd";

export default function Influencers() {
  const [activeTab, setActiveTab] = useState("pending");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAssign = (record) => {
    setSelectedInfluencer(record.name);
    setShowAssignModal(true);
  };

  const handleConfirmAssign = () => {
    setShowAssignModal(false);
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2000);
  };

  const handleDecline = (id) => {
    console.log(`Declined influencer with ID: ${id}`);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: () => (
        <img
          src="/company.png"
          alt="Influencer"
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Social Handle",
      dataIndex: "handle",
      key: "handle",
    },
    {
      title: "Followers",
      dataIndex: "followers",
      key: "followers",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex space-x-2">
          {activeTab === "pending" ? (
            <button
              className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
              onClick={() => handleAssign(record)}
            >
              Assign Campaign
            </button>
          ) : (
            <>
              <button
                className="bg-gray-200 border border-[#DC2626] hover:bg-gray-300 text-gray-800 px-4 py-1 rounded text-sm"
                onClick={() => handleDecline(record.id)}
              >
                Decline
              </button>
              <button
                className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
                onClick={() => handleAssign(record)}
              >
                Approve
              </button>
            </>
          )}
        </div>
      ),
    },
  ];

  const data = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    image: "",
    name: ["Jane Cooper", "Henry Wilson", "Sophia Carter"][index % 3],
    handle: ["@janecooper", "@henrywilson", "@sophiacarter"][index % 3],
    followers: ["85k", "120k", "250k"][index % 3],
    location: ["Toronto, Canada", "New York, USA", "London, UK"][index % 3],
  }));

  const totalPages = 4;

  return (
    <div className=" text-white p-4 ">
      <div className=" mx-auto">
        {/* Tabs */}
        <div className="flex mb-6">
          <button
            className={`px-6 py-2 rounded-t-md ${
              activeTab === "approved"
                ? "bg-[#DC2626] text-white"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => handleTabChange("approved")}
          >
            Approved
          </button>
          <button
            className={`px-6 py-2 rounded-t-md ${
              activeTab === "pending"
                ? "bg-[#DC2626] text-white"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => handleTabChange("pending")}
          >
            Pending
          </button>
        </div>

        {/* Ant Design Table */}
        <Table
          columns={columns}
          dataSource={data}
  
          pagination={{
            current: currentPage,
            pageSize: 10,
            total: data.length,
            onChange: handlePageChange,
            position: ["bottomCenter"],
            itemRender: (_, type, originalElement) => {
              if (type === "prev") {
                return (
                  <button className="flex items-center px-3 py-1 bg-gray-800 text-white rounded">
                    <ChevronLeft size={16} className="mr-1" />
                    Back
                  </button>
                );
              }
              if (type === "next") {
                return (
                  <button className="flex items-center px-3 py-1 bg-gray-800 text-white rounded">
                    Next
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                );
              }
              return originalElement;
            },
          }}
          className="bg-gray-800 rounded-lg"
          rowClassName={() => "text-white hover:bg-gray-700"}
        />

        {/* Assign Modal */}
        <Modal
          title="Assign Campaign"
          visible={showAssignModal}
          onCancel={() => setShowAssignModal(false)}
          footer={[
            <button
              key="cancel"
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              onClick={() => setShowAssignModal(false)}
            >
              Cancel
            </button>,
            <button
              key="confirm"
              className="px-6 py-2 bg-[#DC2626] text-white rounded hover:bg-red-700"
              onClick={handleConfirmAssign}
            >
              Confirm
            </button>,
          ]}
          centered
        >
          <div className="text-center">
            <p className="mb-4">Are you sure you want to assign</p>
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-gray-700 rounded-full mr-2"></div>
              <span className="font-medium">{selectedInfluencer}</span>
              <span className="mx-2">to</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
              <span>McDonald's New Menu Launch</span>
            </div>
          </div>
        </Modal>

        {/* Success Modal */}
        <Modal
          title="Assignment Successful"
          visible={showSuccessModal}
          onCancel={() => setShowSuccessModal(false)}
          footer={null}
          centered
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                <Check className="text-[#DC2626]" size={40} />
              </div>
            </div>
            <p className="mb-2">You assigned</p>
            <div className="flex items-center justify-center mb-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
              <span className="font-medium">{selectedInfluencer}</span>
              <span className="mx-1">to</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
              <span>McDonald's New Menu Launch</span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}