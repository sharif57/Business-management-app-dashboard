

// import { useState } from "react";
// import { Check, ChevronLeft, ChevronRight, SearchSlash } from "lucide-react";
// import { Table, Modal, Button, Input } from "antd";
// import {
//   useAllInfluencerQuery,
//   useAssignTaskMutation,
//   useInfluencerApproveMutation,
//   useInfluencerDeclineMutation,
//   usePendingInfluencerQuery,
// } from "../../../redux/features/influencerSlice";
// import toast from "react-hot-toast";
// import { useAllCampaignQuery } from "../../../redux/features/campaignSlice";

// export default function Influencers() {
//   const [activeTab, setActiveTab] = useState("pending");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize] = useState(10); // Set page size (can be dynamic if needed)
//   const [showAssignModal, setShowAssignModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [selectedInfluencer, setSelectedInfluencer] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   // Fetch all influencers (approved)
//   const { data: influencer, isLoading: isAllLoading, isError: isAllError } = useAllInfluencerQuery({
//     page: currentPage,
//     limit: pageSize,
//   });

//   // Fetch pending influencers
//   const { data: pendingInfluencer, isLoading: isPendingLoading, isError: isPendingError } = usePendingInfluencerQuery({
//     page: currentPage,
//     limit: pageSize,
//   });

//   const {data}=useAllCampaignQuery({
//     page: currentPage,
//     limit: pageSize,
//   });
//   console.log(data?.data,'campaign=======================')


//   const [influencerApprove, { isLoading: isApproving }] = useInfluencerApproveMutation();
//   const [influencerDecline, { isLoading: isDeclining }] = useInfluencerDeclineMutation();

//   const [assignTask] =useAssignTaskMutation();


//   // TODO
//   // Pending tab shows approved influencers, Approved tab shows pending influencers
//   const currentData = activeTab === "pending" ? pendingInfluencer :influencer ;
//   const tableData = currentData?.data?.map((item) => ({
//     id: item.id,
//     image: item.avatar,
//     name: item.name,
//     handle: item.socials?.[0]?.link || "N/A",
//     followers: item.socials?.[0]?.followers ? `${(item.socials[0].followers / 1000).toFixed(0)}k` : "N/A",
//     location: item.address,
//   })) || [];

//   // Get pagination metadata
//   const totalItems = currentData?.meta?.pagination?.total || 0;
//   const totalPages = currentData?.meta?.pagination?.totalPages || 1;

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setCurrentPage(1); 
//     setErrorMessage(null); 
//   };

//   const handlePageChange = (page) => {
//     if (page > 0 && page <= totalPages) {
//       setCurrentPage(page);
//       setErrorMessage(null); // Clear error message on page change
//     }
//   };

//   const handleAssign = async (record) => {
//     try {
//       // const response = await influencerApprove({ id: record.id, data: {} }).unwrap();
//       // console.log("Approval response:", response);
//       setSelectedInfluencer(record.name);
//       setShowAssignModal(activeTab === "approved"); 
//       setShowSuccessModal(activeTab === "pending"); 
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Error approving influencer:", error);
//       setErrorMessage(error?.data?.message || "Failed to approve influencer. Please try again.");
//     }
//   };

//   const handleConfirmAssign = async () => {
//     try {
//       console.log(`Assigned campaign to ${selectedInfluencer}`);
//       setShowAssignModal(false);
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Error assigning campaign:", error);
//       setErrorMessage(error?.data?.message || "Failed to assign campaign. Please try again.");
//     }
//   };

//   const handleDecline = async (id) => {
//     try {
//       const response = await influencerDecline({ id, data: {} }).unwrap();
//       toast.success( response?.data?.message ||"Influencer declined successfully");
//       console.log("Decline response:", response);
//     } catch (error) {
//       console.error("Error declining influencer:", error);
//       setErrorMessage(error?.data?.message || "Failed to decline influencer. Please try again.");
//     }
//   };


//   const handleCapainAssign = async (record) => {
//     try {
//       const response = await assignTask({ influencerId: record.id, data: {} }).unwrap();
//       toast.success( response?.data?.message ||"Campaign assigned successfully");
//       console.log("Decline response:", response);
//     } catch (error) {
//       console.error("Error declining influencer:", error);
//       setErrorMessage(error?.data?.message || "Failed to decline influencer. Please try again.");
//     }
//   };

//   const IMAGE = import.meta.env.VITE_IMAGE_API;

//   const columns = [
//     {
//       title: "Image",
//       dataIndex: "image",
//       key: "image",
//       render: (image) => (
//         <img
//           src={image ? `${IMAGE}${image}` : "/company.png"} // Fallback image if avatar is null
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
//             <>
//               <button
//                 className="bg-gray-200 border border-[#DC2626] hover:bg-gray-300 text-gray-800 px-4 py-1 rounded text-sm disabled:opacity-50"
//                 onClick={() => handleDecline(record.id)}
//                 disabled={isDeclining}
//               >
//                 Decline
//               </button>
//               <button
//                 className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm disabled:opacity-50"
//                 onClick={() => handleAssign(record)}
//                 disabled={isApproving}
//               >
//                 Approve
//               </button>
//             </>
//           ) : (
//             <>
             
//               <button
//                 className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm disabled:opacity-50"
//                 // onClick={() => handleCapainAssign(record)}
//                 disabled={isApproving}
//               >
//                 Assign Campaign
//               </button>
//             </>
//           )}
//         </div>
//       ),
//     },
//   ];

//   // Handle loading and error states
//   if (isAllLoading || isPendingLoading) {
//     return <div className="text-white p-4">Loading...</div>;
//   }

//   if (isAllError || isPendingError) {
//     return <div className="text-white p-4">Error loading influencers. Please try again.</div>;
//   }
  

//   return (
//     <div className="text-white p-4">
//       <div className="mx-auto">
//         {/* Error Message */}
//         {errorMessage && (
//           <div className="mb-4 p-3 bg-red-600 text-white rounded">{errorMessage}</div>
//         )}

//         {/* Tabs */}
//         <div className="flex mb-6 gap-5 ">
//             <button
//             className={`px-8 py-2 border-2 border-gray-500 ${
//               activeTab === "pending" ? "bg-[#DC2626] text-white" : "bg-gray-800 text-gray-400"
//             }`}
//             onClick={() => handleTabChange("pending")}
//           >
//             Pending
//           </button>
//           <button
//             className={`px-8 py-2 border-2 border-gray-500  ${
//               activeTab === "approved" ? "bg-[#DC2626] text-white" : "bg-gray-800 text-gray-400"
//             }`}
//             onClick={() => handleTabChange("approved")}
//           >
//             Approved
//           </button>
        
//         </div>

//         {/* Ant Design Table */}
//         <Table
//           columns={columns}
//           dataSource={tableData}
//           pagination={{
//             current: currentPage,
//             pageSize: pageSize,
//             total: totalItems,
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
//         title="Assign Campaign"
//         open={showAssignModal}
//         onCancel={() => setShowAssignModal(false)}
//         footer={[
//           <Button
//             key="cancel"
//             className="custom-cancel-button"
//             onClick={() => setShowAssignModal(false)}
//           >
//             Cancel
//           </Button>,
         
//         ]}
//         centered
//         className="custom-modal"
//       >
//         <div className="modal-content">
//           {/* Search Input */}
//           <div className="mb-4">
//             <Input
//               placeholder="Search..."
//               prefix={<SearchSlash className="search-icon" />}
//               className="custom-search-input"
//             />
//           </div>

//           <div className="space-y-4 h-[600px] overflow-y-scroll">
//             {/* Campaign Details */}
//             {data?.data.map((campaign) => (
//                <div key={campaign?.id} className="campaign-container">
//             <div className="flex items-center gap-4 mb-4">
//               <img
//                 src={`${IMAGE}${campaign?.banner}`}
//                 alt={campaign?.title}
//                 className="w-12 h-12 object-contain"
//               />
//               <div>
//                 <h1 className="text-lg font-normal">{campaign?.title}</h1>
//                 <p className="text-gray-400">{campaign?.brand}</p>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-base font-medium">Promote event on {campaign?.campaign_type}</h4>
//               <p className="text-gray-400">
//                 Metrics Needed: {campaign?.expected_metrics?.views} Views, {campaign?.expected_metrics?.likes} Likes , {campaign?.expected_metrics?.comments} Comments & {campaign?.expected_metrics?.shares} Shares
//               </p>
//             </div>
//              <Button
//             key="confirm"
//             className="custom-confirm-button mt-4"
//             onClick={handleConfirmAssign || handleCapainAssign(campaign.id)}

//           >
//             Assign
//           </Button>
//           </div>
//             ))}
         
          
//           </div>
//         </div>
//       </Modal>
//         {/* Success Modal */}
//         <Modal
//           title={activeTab === "approved" ? "Assignment Successful" : "Approval Successful"}
//           open={showSuccessModal}
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
//             <p className="mb-2">{activeTab === "approved" ? "You assigned" : "You approved"}</p>
//             <div className="flex items-center justify-center mb-2">
//               <div className="w-6 h-6 bg-gray-700 rounded-full mr-2"></div>
//               <span className="font-medium">{selectedInfluencer}</span>
//               {activeTab === "approved" && <span className="mx-1">to</span>}
//             </div>
//             {activeTab === "approved" && (
//               <div className="flex items-center justify-center">
//                 <div className="w-6 h-6 bg-yellow-200 rounded mr-2"></div>
//                 <span>McDonalds New Menu Launch</span>
//               </div>
//             )}
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Table, Modal, Button, Input } from "antd";
import {
  useAllInfluencerQuery,
  useAssignTaskMutation,
  useInfluencerApproveMutation,
  useInfluencerDeclineMutation,
  usePendingInfluencerQuery,
} from "../../../redux/features/influencerSlice";
import toast from "react-hot-toast";
import { useAllCampaignQuery } from "../../../redux/features/campaignSlice";

export default function Influencers() {
  const [activeTab, setActiveTab] = useState("pending");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  // Fetch campaigns
  const { data: campaigns } = useAllCampaignQuery({
    page: currentPage,
    limit: pageSize,
  });

  const [influencerApprove, { isLoading: isApproving }] = useInfluencerApproveMutation();
  const [influencerDecline, { isLoading: isDeclining }] = useInfluencerDeclineMutation();
  const [assignTask] = useAssignTaskMutation();

  // Determine current data based on active tab
  const currentData = activeTab === "pending" ? pendingInfluencer : influencer;
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
    setCurrentPage(1);
    setErrorMessage(null);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      setErrorMessage(null);
    }
  };

  const handleAssign = async (record) => {
    try {
      await influencerApprove({ id: record.id, data: {} }).unwrap();
      setSelectedInfluencer(record);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error approving influencer:", error);
      setErrorMessage(error?.data?.message || "Failed to approve influencer. Please try again.");
    }
  };

  const handleCampaignAssign = async (campaignId) => {
    try {
      
      const response = await assignTask({
        id: campaignId,
        // influencerId: selectedInfluencer.id,
        data: { influencerId: selectedInfluencer.id },
      }).unwrap();
      
      toast.success(response?.data?.message || "Campaign assigned successfully");
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
      toast.success(response?.data?.message || "Influencer declined successfully");
    } catch (error) {
      console.error("Error declining influencer:", error);
      setErrorMessage(error?.data?.message || "Failed to decline influencer. Please try again.");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter campaigns based on search term
  const filteredCampaigns = campaigns?.data?.filter(campaign =>
    campaign?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign?.brand?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const IMAGE = import.meta.env.VITE_IMAGE_API;

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image ? `${IMAGE}${image}` : "/company.png"}
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
            <button
              className="bg-[#DC2626] hover:bg-red-700 text-white px-4 py-1 rounded text-sm disabled:opacity-50"
              onClick={() => {
                setSelectedInfluencer(record);
                setShowAssignModal(true);
              }}
              disabled={isApproving}
            >
              Assign Campaign
            </button>
          )}
        </div>
      ),
    },
  ];

  if (isAllLoading || isPendingLoading) {
    return <div className="text-white p-4">Loading...</div>;
  }

  if (isAllError || isPendingError) {
    return <div className="text-white p-4">Error loading influencers. Please try again.</div>;
  }

  return (
    <div className="text-white p-4">
      <div className="mx-auto">
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-600 text-white rounded">{errorMessage}</div>
        )}

        <div className="flex mb-6 gap-5">
          <button
            className={`px-8 py-2 border-2 border-gray-500 ${
              activeTab === "pending" ? "bg-[#DC2626] text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => handleTabChange("pending")}
          >
            Pending
          </button>
          <button
            className={`px-8 py-2 border-2 border-gray-500 ${
              activeTab === "approved" ? "bg-[#DC2626] text-white" : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => handleTabChange("approved")}
          >
            Approved
          </button>
        </div>

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

        <Modal
          title="Assign Campaign"
          open={showAssignModal}
          onCancel={() => setShowAssignModal(false)}
          footer={[
            <Button
              key="cancel"
              className="custom-cancel-button"
              onClick={() => setShowAssignModal(false)}
            >
              Cancel
            </Button>,
          ]}
          centered
          className="custom-modal"
        >
          <div className="modal-content">
            <div className="mb-4">
              <Input
                placeholder="Search campaigns..."
                 prefix={<Search className="search-icon" />}
                className="custom-search-input"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <div className="space-y-4 h-[600px] overflow-y-scroll">
              {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map((campaign) => (
                  <div key={campaign?.id} className="campaign-container border-b pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={`${IMAGE}${campaign?.banner}`}
                        alt={campaign?.title}
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <h1 className="text-lg font-normal">{campaign?.title}</h1>
                        <p className="text-gray-400">{campaign?.brand}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-medium">Promote event on {campaign?.campaign_type}</h4>
                      <p className="text-gray-400">
                        Metrics Needed: {campaign?.expected_metrics?.views} Views, {campaign?.expected_metrics?.likes} Likes, {campaign?.expected_metrics?.comments} Comments & {campaign?.expected_metrics?.shares} Shares
                      </p>
                    </div>
                    <Button
                      className="custom-confirm-button mt-4"
                      onClick={() => handleCampaignAssign(campaign.id)}
                    >
                      Assign
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No campaigns found</p>
              )}
            </div>
          </div>
        </Modal>

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
              <span className="font-medium">{selectedInfluencer?.name}</span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}