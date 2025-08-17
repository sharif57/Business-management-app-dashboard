

// import { useState } from "react";
// import { Check, ChevronLeft, ChevronRight } from "lucide-react";
// import { Table, Modal } from "antd";
// import { useAllInfluencerQuery, usePendingInfluencerQuery } from "../../../redux/features/influencerSlice";

// export default function Influencers() {
//   const [activeTab, setActiveTab] = useState("pending");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showAssignModal, setShowAssignModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [selectedInfluencer, setSelectedInfluencer] = useState(null);

//   const {data: influencer}= useAllInfluencerQuery({page: 1, limit: 10000, total: 6, totalPages: 1})
//   console.log(influencer, 'influencer');

//   const { data: pendingInfluencer } = usePendingInfluencerQuery({
//     page: 1,
//     limit: 10000,
//     total: 6,
//     totalPages: 1,
//   })

//   console.log(pendingInfluencer, 'pendingInfluencer');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const handleAssign = (record) => {
//     setSelectedInfluencer(record.name);
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
//     console.log(`Declined influencer with ID: ${id}`);
//   };

//   const columns = [
//     {
//       title: "Image",
//       dataIndex: "image",
//       key: "image",
//       render: () => (
//         <img
//           src="/company.png"
//           alt="Influencer"
//           className="w-10 h-10 rounded-full"
//         />
//       ),
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Social Handle",
//       dataIndex: "handle",
//       key: "handle",
//     },
//     {
//       title: "Followers",
//       dataIndex: "followers",
//       key: "followers",
//     },
//     {
//       title: "Location",
//       dataIndex: "location",
//       key: "location",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <div className="flex space-x-2">
//           {activeTab === "pending" ? (
//             <button
//               className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
//               onClick={() => handleAssign(record)}
//             >
//               Assign Campaign
//             </button>
//           ) : (
//             <>
//               <button
//                 className="bg-gray-200 border border-[#DC2626] hover:bg-gray-300 text-gray-800 px-4 py-1 rounded text-sm"
//                 onClick={() => handleDecline(record.id)}
//               >
//                 Decline
//               </button>
//               <button
//                 className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm"
//                 onClick={() => handleAssign(record)}
//               >
//                 Approve
//               </button>
//             </>
//           )}
//         </div>
//       ),
//     },
//   ];

//   const data = Array.from({ length: 20 }, (_, index) => ({
//     id: index + 1,
//     image: "",
//     name: ["Jane Cooper", "Henry Wilson", "Sophia Carter"][index % 3],
//     handle: ["@janecooper", "@henrywilson", "@sophiacarter"][index % 3],
//     followers: ["85k", "120k", "250k"][index % 3],
//     location: ["Toronto, Canada", "New York, USA", "London, UK"][index % 3],
//   }));

//   const totalPages = 4;

//   return (
//     <div className=" text-white p-4 ">
//       <div className=" mx-auto">
//         {/* Tabs */}
//         <div className="flex mb-6">
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

//         {/* Ant Design Table */}
//         <Table
//           columns={columns}
//           dataSource={data}
  
//           pagination={{
//             current: currentPage,
//             pageSize: 10,
//             total: data.length,
//             onChange: handlePageChange,
//             position: ["bottomCenter"],
//             itemRender: (_, type, originalElement) => {
//               if (type === "prev") {
//                 return (
//                   <button className="flex items-center px-3 py-1 bg-gray-800 text-white rounded">
//                     <ChevronLeft size={16} className="mr-1" />
//                     Back
//                   </button>
//                 );
//               }
//               if (type === "next") {
//                 return (
//                   <button className="flex items-center px-3 py-1 bg-gray-800 text-white rounded">
//                     Next
//                     <ChevronRight size={16} className="ml-1" />
//                   </button>
//                 );
//               }
//               return originalElement;
//             },
//           }}
//           className="bg-gray-800 rounded-lg"
//           rowClassName={() => "text-white hover:bg-gray-700"}
//         />

//         {/* Assign Modal */}
//         <Modal
//           title="Assign Campaign"
//           visible={showAssignModal}
//           onCancel={() => setShowAssignModal(false)}
//           footer={[
//             <button
//               key="cancel"
//               className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//               onClick={() => setShowAssignModal(false)}
//             >
//               Cancel
//             </button>,
//             <button
//               key="confirm"
//               className="px-6 py-2 bg-[#DC2626] text-white rounded hover:bg-red-700"
//               onClick={handleConfirmAssign}
//             >
//               Confirm
//             </button>,
//           ]}
//           centered
//         >
//           <div className="text-center">
//             <p className="mb-4">Are you sure you want to assign</p>
//             <div className="flex items-center justify-center mb-2">
//               <div className="w-8 h-8 bg-gray-700 rounded-full mr-2"></div>
//               <span className="font-medium">{selectedInfluencer}</span>
//               <span className="mx-2">to</span>
//             </div>
//             <div className="flex items-center justify-center">
//               <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
//               <span>McDonald's New Menu Launch</span>
//             </div>
//           </div>
//         </Modal>

//         {/* Success Modal */}
//         <Modal
//           title="Assignment Successful"
//           visible={showSuccessModal}
//           onCancel={() => setShowSuccessModal(false)}
//           footer={null}
//           centered
//         >
//           <div className="text-center">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
//                 <Check className="text-[#DC2626]" size={40} />
//               </div>
//             </div>
//             <p className="mb-2">You assigned</p>
//             <div className="flex items-center justify-center mb-2">
//               <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
//               <span className="font-medium">{selectedInfluencer}</span>
//               <span className="mx-1">to</span>
//             </div>
//             <div className="flex items-center justify-center">
//               <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
//               <span>McDonald's New Menu Launch</span>
//             </div>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Table, Modal } from "antd";
import {
  useAllInfluencerQuery,
  useInfluencerApproveMutation,
  useInfluencerDeclineMutation,
  usePendingInfluencerQuery,
} from "../../../redux/features/influencerSlice";
import toast from "react-hot-toast";

export default function Influencers() {
  const [activeTab, setActiveTab] = useState("pending");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Set page size (can be dynamic if needed)
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch all influencers (approved)
  const { data: influencer, isLoading: isAllLoading, isError: isAllError } = useAllInfluencerQuery({
    page: currentPage,
    limit: pageSize,
  });

  // Fetch pending influencers
  const { data: pendingInfluencer, isLoading: isPendingLoading, isError: isPendingError } = usePendingInfluencerQuery({
    page: currentPage,
    limit: pageSize,
  });

  const [influencerApprove, { isLoading: isApproving }] = useInfluencerApproveMutation();
  const [influencerDecline, { isLoading: isDeclining }] = useInfluencerDeclineMutation();


  // TODO
  // Pending tab shows approved influencers, Approved tab shows pending influencers
  const currentData = activeTab === "pending" ? pendingInfluencer :influencer ;
  const tableData = currentData?.data?.map((item) => ({
    id: item.id,
    image: item.avatar,
    name: item.name,
    handle: item.socials?.[0]?.link || "N/A",
    followers: item.socials?.[0]?.followers ? `${(item.socials[0].followers / 1000).toFixed(0)}k` : "N/A",
    location: item.address,
  })) || [];

  // Get pagination metadata
  const totalItems = currentData?.meta?.pagination?.total || 0;
  const totalPages = currentData?.meta?.pagination?.totalPages || 1;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when tab changes
    setErrorMessage(null); // Clear error message on tab change
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      setErrorMessage(null); // Clear error message on page change
    }
  };

  const handleAssign = async (record) => {
    try {
      const response = await influencerApprove({ id: record.id, data: {} }).unwrap();
      console.log("Approval response:", response);
      setSelectedInfluencer(record.name);
      setShowAssignModal(activeTab === "approved"); 
      setShowSuccessModal(activeTab === "pending"); 
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error approving influencer:", error);
      setErrorMessage(error?.data?.message || "Failed to approve influencer. Please try again.");
    }
  };

  const handleConfirmAssign = async () => {
    try {
      console.log(`Assigned campaign to ${selectedInfluencer}`);
      setShowAssignModal(false);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error assigning campaign:", error);
      setErrorMessage(error?.data?.message || "Failed to assign campaign. Please try again.");
    }
  };

  const handleDecline = async (id) => {
    try {
      const response = await influencerDecline({ id, data: {} }).unwrap();
      toast.success( response?.data?.message ||"Influencer declined successfully");
      console.log("Decline response:", response);
    } catch (error) {
      console.error("Error declining influencer:", error);
      setErrorMessage(error?.data?.message || "Failed to decline influencer. Please try again.");
    }
  };

  const IMAGE = import.meta.env.VITE_IMAGE_API;

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image ? `${IMAGE}${image}` : "/company.png"} // Fallback image if avatar is null
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
            <>
              <button
                className="bg-gray-200 border border-[#DC2626] hover:bg-gray-300 text-gray-800 px-4 py-1 rounded text-sm disabled:opacity-50"
                onClick={() => handleDecline(record.id)}
                disabled={isDeclining}
              >
                Decline
              </button>
              <button
                className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm disabled:opacity-50"
                onClick={() => handleAssign(record)}
                disabled={isApproving}
              >
                Approve
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-gray-200 border border-[#DC2626] hover:bg-gray-300 text-gray-800 px-4 py-1 rounded text-sm disabled:opacity-50"
                onClick={() => handleDecline(record.id)}
                disabled={isDeclining}
              >
                Decline
              </button>
              <button
                className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm disabled:opacity-50"
                onClick={() => handleAssign(record)}
                disabled={isApproving}
              >
                Assign Campaign
              </button>
            </>
          )}
        </div>
      ),
    },
  ];

  // Handle loading and error states
  if (isAllLoading || isPendingLoading) {
    return <div className="text-white p-4">Loading...</div>;
  }

  if (isAllError || isPendingError) {
    return <div className="text-white p-4">Error loading influencers. Please try again.</div>;
  }

  return (
    <div className="text-white p-4">
      <div className="mx-auto">
        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-600 text-white rounded">{errorMessage}</div>
        )}

        {/* Tabs */}
        <div className="flex mb-6">
            <button
            className={`px-6 py-2 rounded-t-md ${
              activeTab === "pending" ? "bg-[#DC2626] text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => handleTabChange("pending")}
          >
            Pending
          </button>
          <button
            className={`px-6 py-2 rounded-t-md ${
              activeTab === "approved" ? "bg-[#DC2626] text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => handleTabChange("approved")}
          >
            Approved
          </button>
        
        </div>

        {/* Ant Design Table */}
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: totalItems,
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
          open={showAssignModal}
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
              <span>McDonalds New Menu Launch</span>
            </div>
          </div>
        </Modal>

        {/* Success Modal */}
        <Modal
          title={activeTab === "approved" ? "Assignment Successful" : "Approval Successful"}
          open={showSuccessModal}
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
            <p className="mb-2">{activeTab === "approved" ? "You assigned" : "You approved"}</p>
            <div className="flex items-center justify-center mb-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
              <span className="font-medium">{selectedInfluencer}</span>
              {activeTab === "approved" && <span className="mx-1">to</span>}
            </div>
            {activeTab === "approved" && (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
                <span>McDonalds New Menu Launch</span>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
}