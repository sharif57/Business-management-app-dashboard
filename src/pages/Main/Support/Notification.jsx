import { useState } from "react";
import { Table } from "antd";
import { NotebookPen, Send } from "lucide-react";
import { useAllNotificationQuery } from "../../../redux/features/notificationSlice";
import toast from "react-hot-toast";

const Notification = () => {
  const [isProcessed, setIsProcessed] = useState(false); // Track processed state
  const { data: notificationData, isLoading, error } = useAllNotificationQuery({
    page: 1,
    limit: 10,
  });

  console.log("Notification Data:", notificationData);

  // Map API data to table format
  const tableData = notificationData?.data?.map((notification) => ({
    key: notification.id,
    notification: notification.type, // e.g., "HARD" or "SOFT"
    recipients: notification.title, // Using title as a placeholder for recipients
    status: "Scheduled", // Derived status (could be dynamic if API provides)
    date: new Date().toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" }), // Static date for now
    time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }), // Static time for now
  })) || [];

  // Filter processed notifications if isProcessed is true
  const filteredData = isProcessed
    ? tableData.filter((item) => item.status === "Processed")
    : tableData;

  // Pagination metadata
  const { page, limit, total, totalPages } = notificationData?.meta?.pagination || {
    page: 1,
    limit: 10000,
    total: 0,
    totalPages: 1,
  };

  // Handle Processed button click
  const handleProcessed = () => {
    setIsProcessed(!isProcessed);
    toast.success(`Showing ${isProcessed ? "all" : "processed"} notifications`);
  };

  // Handle Send Notification button click
  const handleSendNotification = () => {
    toast.success("Notification sent successfully!"); // Simulate sending
    // Add API call or logic to send notification if needed
  };

  const columns = [
    {
      title: "Notification Type",
      dataIndex: "notification",
      key: "notification",
    },
    {
      title: "Recipients",
      dataIndex: "recipients",
      key: "recipients",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Time",
      key: "time",
      dataIndex: "time",
    },
  ];

  if (isLoading) {
    return <div className="text-white p-4">Loading notifications...</div>;
  }

  if (error) {
    return <div className="text-white p-4">Error loading notifications. Please try again.</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-end items-center space-x-4 mb-8">
        <button
          className={`border flex items-center border-[#DC2626] bg-[#fff1f1] text-[#DC2626] px-6 py-4 text-sm rounded-md hover:bg-gray-800 transition-colors ${
            isProcessed ? "bg-gray-800 text-white" : ""
          }`}
          onClick={handleProcessed}
        >
          <NotebookPen className="mr-2" size={16} />
          {isProcessed ? "Show All" : "Processed"}
        </button>
        <button
          className="flex items-center bg-[#DC2626] text-white px-6 py-4 text-sm rounded-md hover:bg-red-700 transition-colors"
          onClick={handleSendNotification}
        >
          <Send className="mr-2" size={16} />
          Send Notification
        </button>
      </div>
      <div className="rounded-lg border py-4 border-black recent-users-table">
        <h3 className="text-2xl text-white mb-4 pl-2">Notification History</h3>
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            current: page,
            pageSize: limit,
            total: total,
            onChange: (page) => {
              // Update query with new page if needed (currently static page=1)
            },
            position: ["bottomCenter"],
          }}
          className="rounded-lg bg-gray-800"
          rowClassName={() => "text-white hover:bg-gray-700"}
        />
      </div>
    </div>
  );
};

export default Notification;