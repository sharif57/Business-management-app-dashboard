import { useState } from "react";
import { Table } from "antd";
import DashboardModal from "../../../Components/DashboardModal";
import { useAllPaymentHistoryQuery } from "../../../redux/features/paymentSlice";
import { format } from "date-fns";

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [statusFilter, setStatusFilter] = useState("all"); // Default to show all

  // Fetch payment history with dynamic pagination and status
  const { data: paymentHistory, isLoading, error } = useAllPaymentHistoryQuery({
    page: 1,
    limit: 10, // Adjusted to match API default
    status: statusFilter === "all" ? undefined : statusFilter, // Filter by status if not "all"
  });

  console.log(paymentHistory?.data, "paymentHistory");

  // Map API data to table format
  const tableData = paymentHistory?.data?.map((payment) => ({
    key: payment.id,
    id: payment.id,
    name: payment.taskId, // Using influencerId as a placeholder for name
    social: `@${payment.influencerId.split("").slice(0, 5).join("")}`, // Simplified social handle
    campaign: payment.method, // Using taskId as a placeholder for campaign name
    amount: `$${payment.amount.toLocaleString()}`,
    status: payment.status,
    invoices: payment.invoices[0], // First invoice image
    createdAt: payment.createdAt,
  })) || [];

  // Filter data based on status
  const filteredData = statusFilter === "all"
    ? tableData
    : tableData.filter((item) => item.status === statusFilter.toUpperCase());

  // Pagination metadata
  const { page, limit, total } = paymentHistory?.meta?.pagination || {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  };

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const IMAGE = import.meta.env.VITE_IMAGE_API;

  const columns = [
    {
      title: "Image",
      dataIndex: "invoices",
      key: "invoices",
      render: (invoices) => (
        <div className="flex items-center justify-center">
          <img
            src={`${IMAGE}${invoices}`} // Fallback to default image if no invoices
            alt="Transaction Image"
            className="w-10 h-10 object-contain cursor-pointer"
          />
        </div>
      ),
    },
    {
      title: "Transaction ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Social Handle",
      dataIndex: "social",
      key: "social",
    },
    {
      title: "method name",
      dataIndex: "campaign",
      key: "campaign",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",           
      key: "Review",
      align: "center",
      render: (_, data) => (
        <div className="flex items-center justify-center">
          <button
            onClick={() => showModal(data)}
            className="btn bg-[#DC2626] text-white px-[42px] py-[10px] text-sm rounded"
          >
            View Details
          </button>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <div className="text-white p-4">Loading payment history...</div>;
  }

  if (error) {
    return <div className="text-white p-4">Error loading payment history. Please try again.</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <div className="space-x-6">
          <button
            className={`btn px-[42px] py-[10px] text-sm rounded ${
              statusFilter === "all"
                ? "bg-[#DC2626] text-white"
                : "border text-white bg-gray-800"
            }`}
            onClick={() => setStatusFilter("all")}
          >
            All
          </button>
          <button
            className={`btn px-[42px] py-[10px] text-sm rounded ${
              statusFilter === "pending"
                ? "bg-[#DC2626] text-white"
                : "border text-white bg-gray-800"
            }`}
            onClick={() => setStatusFilter("pending")}
          >
            Pending
          </button>
          <button
            className={`btn px-[42px] py-[10px] text-sm rounded ${
              statusFilter === "processed"
                ? "bg-[#DC2626] text-white"
                : "border text-white bg-gray-800"
            }`}
            onClick={() => setStatusFilter("processed")}
          >
            Processed
          </button>
          <button
            className={`btn px-[42px] py-[10px] text-sm rounded ${
              statusFilter === "cancel"
                ? "bg-[#DC2626] text-white"
                : "border text-white bg-gray-800"
            }`}
            onClick={() => setStatusFilter("cancel")}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="rounded-lg border py-4 border-black recent-users-table">
        <h3 className="text-2xl text-white mb-4 pl-2">Earnings</h3>
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            current: page,
            pageSize: limit,
            total: total,
            onChange: (page) => {
              // Update query with new page if needed (currently static page=1)

              // This can be enhanced to handle pagination dynamically
              console.log(`Page changed to: ${page}`);
            },
            position: ["bottomCenter"],
          }}
          className="rounded-lg bg-gray-800"
          rowClassName={() => "text-white hover:bg-gray-700"}
        />

        <DashboardModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          maxWidth="500px"
          backgroundColor="bg-[#EDEAF3]"
        >
          <div className="p-4">
            <h2 className="text-lg text-center mb-4">Transaction Details</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <p>Transaction ID:</p>
                <p>{modalData.id}</p>
              </div>
              <div className="flex justify-between">
                <p>Date:</p>
                <p>{modalData.createdAt ? format(new Date(modalData.createdAt), "PPP") : "N/A"}</p>
              </div>
              <div className="flex justify-between">
                <p>User ID:</p>
                <p>{modalData.name}</p>
              </div>
              <div className="flex justify-between">
                <p>Method:</p>
                <p>{modalData.status}</p>
              </div>
              <div className="flex justify-between">
                <p>Amount:</p>
                <p>{modalData.amount}</p>
              </div>
              <div className="flex justify-between">
                <p>Status:</p>
                <p>{modalData.status}</p>
              </div>
            </div>
            <div className="p-4 mt-auto text-center mx-auto flex items-center justify-center">
              <button className="w-fit bg-black text-white px-10 py-2 flex items-center justify-center gap-3 text-lg outline-none rounded-2xl">
                <span className="text-white font-light">Download</span>
              </button>
            </div>
          </div>
        </DashboardModal>
      </div>
    </div>
  );
};

export default Payment;