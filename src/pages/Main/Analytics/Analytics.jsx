// Analytics.jsx
import { useState } from "react";
import { Table, Button, Spin, Alert } from "antd";
import DashboardModal from "../../../Components/DashboardModal";
import { useAnalyticsListQuery } from "../../../redux/features/analyticSlice";

const Analytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [status, setStatus] = useState("COMPLETED"); 
  const [page, setPage] = useState(1); 
  const [limit, setLimit] = useState(10); 

  const { data: analyticsData, isLoading, isError, error } = useAnalyticsListQuery({
    status,
    page,
    limit,
  });

  // Handle row click to open modal
  const handleRowClick = (record) => {
    setModalData(record);
    setIsModalOpen(true);
  };

    const IMAGE = import.meta.env.VITE_IMAGE_API


  // Table columns
  const columns = [
    {
      title: "Image",
      dataIndex: "campaignBanner",
      key: "campaignBanner",
      render: (campaignBanner) => (
        <div className="flex items-center justify-center">
          <img
            src={`${IMAGE}${campaignBanner} || "/company.png"}`} 
            alt="Campaign Banner"
            className="w-12 h-12 object-cover rounded"
            onError={(e) => (e.target.src = "/company.png")} 
          />
        </div>
      ),
    },
    {
      title: "Campaign Name",
      dataIndex: "campaignName",
      key: "campaignName",
    },
    // {
    //   title: "Platform",
    //   dataIndex: "platform",
    //   key: "platform",
    // },
    {
      title: "Total Views",
      dataIndex: "totalViews",
      key: "totalViews",
    },
    {
      title: "Total Likes",
      dataIndex: "totalLikes",
      key: "totalLikes",
    },
    {
      title: "Total Shares",
      dataIndex: "totalShares",
      key: "totalShares",
    },
  ];

  // Map API data to table data
  const dataSource = analyticsData?.data?.map((item, index) => ({
    key: item.campaignId,
    campaignId: item.campaignId,
    campaignName: item.campaignName,
    campaignBanner: item.campaignBanner,
    platform: item.platform || "Unknown",
    totalViews: item.tasks.total.views.toLocaleString(),
    totalLikes: item.tasks.total.likes.toLocaleString(),
    totalShares: item.tasks.total.shares.toLocaleString(),
  })) || [];

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setPage(1); 
  };

  const handlePaginationChange = (newPage, newLimit) => {
    setPage(newPage);
    setLimit(newLimit);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="space-x-4">
          <Button
            className={`px-6 py-2 text-sm rounded ${
              status === "ACTIVE" ? "bg-[#DC2626] text-white" : "bg-gray-200"
            }`}
            onClick={() => handleStatusChange("ACTIVE")}
          >
            Active
          </Button>
          <Button
            className={`px-6 py-2 text-sm rounded ${
              status === "COMPLETED" ? "bg-[#DC2626] text-white" : "bg-gray-200"
            }`}
            onClick={() => handleStatusChange("COMPLETED")}
          >
            Completed
          </Button>
        </div>
      </div>

      <div className="rounded-lg border py-4 border-black mt-8 recent-users-table">
        <h3 className="text-2xl text-white mb-4 pl-2">Earnings</h3>

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
            description={error?.data?.message || "Failed to fetch analytics data."}
            type="error"
            showIcon
            className="mb-4"
          />
        )}

        {/* Table */}
        {!isLoading && !isError && (
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              current: page,
              pageSize: limit,
              total: analyticsData?.meta?.pagination?.total || 0,
              pageSizeOptions: ["10", "20", "50"],
              showSizeChanger: true,
              onChange: handlePaginationChange,
              onShowSizeChange: handlePaginationChange,
              position: ["bottomCenter"],
            }}
            className="rounded-lg"
            rowClassName="cursor-pointer"
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
          />
        )}

        {/* Dashboard Modal */}
        <DashboardModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          maxWidth="500px"
          backgroundColor="bg-[#EDEAF3]"
        >
          <div className="p-4">
            <h2 className="text-lg text-center mb-4">Campaign Details</h2>
            <div className="flex justify-between mb-4 text-gray-600">
              <p>Campaign ID:</p>
              <p>{modalData.campaignId || "N/A"}</p>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              <p>Campaign Name:</p>
              <p>{modalData.campaignName || "N/A"}</p>
            </div>
            {/* <div className="flex justify-between mb-4 text-gray-600">
              <p>Platform:</p>
              <p>{modalData.platform || "N/A"}</p>
            </div> */}
            <div className="flex justify-between mb-4 text-gray-600">
              <p>Total Views:</p>
              <p>{modalData.totalViews || "0"}</p>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              <p>Total Likes:</p>
              <p>{modalData.totalLikes || "0"}</p>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              <p>Total Shares:</p>
              <p>{modalData.totalShares || "0"}</p>
            </div>
            <div className="flex justify-center mt-6">
              <button className="w-fit bg-black text-white px-10 py-2 rounded-2xl">
                Download Report
              </button>
            </div>
          </div>
        </DashboardModal>
      </div>
    </div>
  );
};

export default Analytics;