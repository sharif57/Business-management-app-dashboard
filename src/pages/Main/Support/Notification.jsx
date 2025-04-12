import { Table } from "antd";
import { NotebookPen, Send } from "lucide-react";

const Notification = () => {
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

  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      notification: "Soft Reminder",
      recipients: "Samsung Gala....Campaign",
      status: "Scheduled",
      Phone: "+12746478994",
      Review: "See Review",
      date: "16 Apr 2024",
      time: "10:53 AM",
      _id: index,
    });
  }
  return (
    <div>
      <div className="flex justify-end items-center space-x-4">
        <button className="border flex items-center border-[#DC2626] bg-[#fff1f1] text-[#DC2626] px-6 py-4 text-sm rounded-md hover:bg-gray-800 transition-colors">
        <NotebookPen  className="mr-2" size={16} />
          Processed
        </button>

        <button className="flex items-center bg-[#DC2626] text-white px-6 py-4 text-sm rounded-md hover:bg-red-700 transition-colors">
          <Send className="mr-2" size={16} />
          Send Notification
        </button>
      </div>
      <div className="rounded-lg border py-4 border-black mt-8 recent-users-table">
        <h3 className="text-2xl text-white mb-4 pl-2">Notification History</h3>
        {/* Ant Design Table */}
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Notification;
