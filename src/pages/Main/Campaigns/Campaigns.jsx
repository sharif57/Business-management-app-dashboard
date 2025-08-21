

import { useState } from "react";
import { Table } from "antd";
import { Plus, ChevronLeft, ChevronRight, Trash, Edit, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useAllCampaignQuery, useDeleteCampaignMutation, useUpdateCampaignMutation } from "../../../redux/features/campaignSlice";
import DashboardModal from "../../../Components/DashboardModal";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Campaigns = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false); // Track if modal is for editing
  const [activeTab, setActiveTab] = useState("active");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Matches API default limit

  // Fetch campaigns with dynamic pagination
  const { data: campaigns, isLoading, isError } = useAllCampaignQuery({
    page: currentPage,
    limit: pageSize,
    role: "sub-admin",
  });

  const [updateCampaign] = useUpdateCampaignMutation();
  const [deleteCampaign] = useDeleteCampaignMutation();

  // Map API data to table format
  const tableData = campaigns?.data?.map((campaign) => ({
    key: campaign.id,
    id: campaign.id,
    banner: campaign.banner,
    title: campaign.title,
    brand: campaign.brand,
    task: `Promote event on ${campaign.campaign_type}`,
    budget: `$${campaign.budget.toLocaleString()}`,
    payout_deadline: campaign.payout_deadline,
    duration: campaign.duration,
    expected_metrics: campaign.expected_metrics,
    description: campaign.description,
  })) || [];

  // Filter campaigns based on activeTab
  const filteredData = tableData.filter((campaign) => {
    const durationDate = new Date(campaign.duration);
    const today = new Date();
    return activeTab === "active"
      ? durationDate >= today // Active: duration is in the future or today
      : durationDate < today; // Completed: duration is in the past
  });

  // Pagination metadata
  const totalItems = campaigns?.meta?.pagination?.total || 0;
  const totalPages = campaigns?.meta?.pagination?.totalPages || 1;

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when switching tabs
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Show modal with campaign details or edit form
  const showModal = (data, edit = false) => {
    setModalData({
      ...data,
      banner: data.banner || "",
      title: data.title || "",
      brand: data.brand || "",
      budget: data.budget.replace("$", "").replace(/,/g, "") || "", // Remove $ and commas for numeric input
      payout_deadline: data.payout_deadline || "",
      duration: data.duration || "",
      expected_metrics: data.expected_metrics || { views: 0, likes: 0, comments: 0, shares: 0 },
      description: data.description || "",
    });
    setIsEditMode(edit);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DC2626",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
      const res =   await deleteCampaign(id).unwrap();
        toast.success("Campaign deleted successfully!" || res?.message);
      } catch (error) {
        toast.error(error?.data?.message || "Failed to delete campaign. Please try again.");
        console.error("Delete error:", error);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const budgetNum = Number(modalData.budget.replace(/[^0-9.-]+/g, "")); // Remove all non-numeric characters except . and -
    if (isNaN(budgetNum)) {
      toast.error("Please enter a valid budget amount.");
      return;
    }

    const formData = new FormData();
    // formData.append("id", modalData.id);
    formData.append("title", modalData.title);
    formData.append("brand", modalData.brand);
    formData.append("budget", budgetNum); // Append as number
    formData.append("payout_deadline", modalData.payout_deadline);
    formData.append("duration", modalData.duration);
    formData.append("expected_metrics", JSON.stringify(modalData.expected_metrics));
    formData.append("description", modalData.description);
    if (modalData.newBanner) {
      formData.append("banner", modalData.newBanner);
    }

    try {
      const res = await updateCampaign({id: modalData.id, data: formData}).unwrap();
      toast.success(res?.message || "Campaign updated successfully!");
      setIsModalOpen(false);
      setModalData({});
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update campaign. Please try again.");
      console.error("Update error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "newBanner" && files) {
      setModalData((prev) => ({ ...prev, newBanner: files[0] }));
    } else if (name === "budget") {
      // Allow only numeric input and remove non-numeric characters on change
      const cleanValue = value.replace(/[^0-9.-]+/g, "");
      setModalData((prev) => ({ ...prev, [name]: cleanValue }));
    } else {
      setModalData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const IMAGE = import.meta.env.VITE_IMAGE_API;

  const columns = [
    {
      title: "Image",
      dataIndex: "banner",
      key: "banner",
      render: (banner) => (
        <div className="flex items-center justify-center">
          <img
            src={`${IMAGE}${banner}`}
            alt="Campaign Banner"
            className="w-10 h-10 object-contain"
          />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Payout Deadline",
      dataIndex: "payout_deadline",
      key: "payout_deadline",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, data) => (
      <div className="flex items-center justify-center gap-2">
  {/* View Details */}
  <button
    onClick={() => showModal(data)}
    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg 
               bg-red-600 text-white hover:bg-red-700 transition duration-200 shadow-md"
  >
    <Eye size={18} />
  </button>

  {/* Edit */}
  <button
    onClick={() => showModal(data, true)}
    className="p-2 rounded-lg bg-blue-100 text-blue-500 hover:bg-blue-200 
               transition duration-200 shadow-sm"
  >
    <Edit size={18} />
  </button>

  {/* Delete */}
  <button
    onClick={() => handleDelete(data.id)}
    className="p-2 rounded-lg bg-red-100 text-red-500 hover:bg-red-200 
               transition duration-200 shadow-sm"
  >
    <Trash size={18} />
  </button>
</div>
      ),
    },
  ];

  if (isLoading) {
    return <div className="text-white p-4">Loading campaigns...</div>;
  }

  if (isError) {
    return <div className="text-white p-4">Error loading campaigns. Please try again.</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="space-x-6">
          <button
            className={`btn px-10 py-2 text-sm rounded ${
              activeTab === "active"
                ? "bg-[#DC2626] text-white"
                : "bg-gray-800 text-gray-400 border-2 border-gray-500"
            }`}
            onClick={() => handleTabChange("active")}
          >
            Active
          </button>
          <button
            className={`btn px-10 py-2 text-sm rounded ${
              activeTab === "completed"
                ? "bg-[#DC2626] text-white"
                : "bg-gray-800 text-gray-400 border-2 border-gray-500"
            }`}
            onClick={() => handleTabChange("completed")}
          >
            Completed
          </button>
        </div>
        <Link to="/campaigns/create-campaigns">
          <button className="btn flex items-center gap-2 bg-[#DC2626] text-white px-5 py-2 text-sm rounded">
            <Plus size={16} />
            Create New Campaign
          </button>
        </Link>
      </div>

      <div className="rounded-lg border py-4 border-black recent-users-table">
        <h3 className="text-2xl text-white mb-4 pl-2">Campaigns</h3>
        <Table
          columns={columns}
          dataSource={filteredData}
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
          className="rounded-lg bg-gray-800"
          rowClassName={() => "text-white hover:bg-gray-700"}
        />
      </div>

      <DashboardModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        maxWidth="500px"
        backgroundColor="bg-[#EDEAF3]"
      >
        <div className="p-4">
          <h2 className="text-lg text-center mb-4">
            {isEditMode ? "Edit Campaign" : "Campaign Details"}
          </h2>
          {isEditMode ? (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600">Banner</label>
                <input
                  type="file"
                  name="newBanner"
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Title</label>
                <input
                  type="text"
                  name="title"
                  value={modalData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={modalData.brand}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Budget</label>
                <input
                  type="number"
                  name="budget"
                  value={modalData.budget}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  step="0.01" // Allow decimals
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Payout Deadline</label>
                <input
                  type="date"
                  name="payout_deadline"
                  value={modalData.payout_deadline}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Duration</label>
                <input
                  type="date"
                  name="duration"
                  value={modalData.duration}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Expected Metrics</label>
                <input
                  type="text"
                  name="expected_metrics"
                  value={JSON.stringify(modalData.expected_metrics)}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., {'views': 100, 'likes': 50, 'comments': 20, 'shares': 10}"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Description</label>
                <textarea
                  name="description"
                  value={modalData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-fit bg-black text-white px-10 py-2 flex items-center justify-center gap-3 text-lg rounded-2xl"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <p>Campaign ID:</p>
                <p>{modalData.id}</p>
              </div>
              <div className="flex justify-between">
                <p>Title:</p>
                <p>{modalData.title}</p>
              </div>
              <div className="flex justify-between">
                <p>Brand:</p>
                <p>{modalData.brand}</p>
              </div>
              <div className="flex justify-between">
                <p>Task:</p>
                <p>{modalData.task}</p>
              </div>
              <div className="flex justify-between">
                <p>Budget:</p>
                <p>{modalData.budget}</p>
              </div>
              <div className="flex justify-between">
                <p>Payout Deadline:</p>
                <p>{modalData.payout_deadline}</p>
              </div>
              <div className="flex justify-between">
                <p>Duration:</p>
                <p>{new Date(modalData.duration).toLocaleDateString()}</p>
              </div>
              <div className="flex justify-between">
                <p>Expected Metrics:</p>
                <p>
                  {modalData.expected_metrics
                    ? `Views: ${modalData.expected_metrics.views}, Likes: ${modalData.expected_metrics.likes}, Comments: ${modalData.expected_metrics.comments}, Shares: ${modalData.expected_metrics.shares}`
                    : "N/A"}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Description:</p>
                <p>{modalData.description?.substring(0, 100)}...</p>
              </div>
              <div className="mt-6 text-center">
                <button className="w-fit bg-black text-white px-10 py-2 flex items-center justify-center gap-3 text-lg rounded-2xl">
                  <span className="font-light">Download Details</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </DashboardModal>
    </div>
  );
};

export default Campaigns;