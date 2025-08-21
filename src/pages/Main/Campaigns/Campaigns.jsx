import { useState } from "react";
import { Table } from "antd";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAllCampaignQuery } from "../../../redux/features/campaignSlice";
import DashboardModal from "../../../Components/DashboardModal";

const Campaigns = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [activeTab, setActiveTab] = useState("active");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Matches API default limit

  // Fetch campaigns with dynamic pagination
  const { data: campaigns, isLoading, isError } = useAllCampaignQuery({
    page: currentPage,
    limit: pageSize,
    role: "sub-admin",
  });

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

  // Show modal with campaign details
  const showModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
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
        <div className="flex items-center justify-center">
          <button
            onClick={() => showModal(data)}
            className="btn bg-[#DC2626] text-white px-10 py-2 text-sm rounded"
          >
            View Details
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
        <Link to="/create-campaigns">
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
          <h2 className="text-lg text-center mb-4">Campaign Details</h2>
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
          </div>
          <div className="mt-6 text-center">
            <button className="w-fit bg-black text-white px-10 py-2 flex items-center justify-center gap-3 text-lg rounded-2xl">
              <span className="font-light">Download Details</span>
            </button>
          </div>
        </div>
      </DashboardModal>
    </div>
  );
};

export default Campaigns;