
import { Table, Modal } from "antd";
import { useState } from "react";
import { useAllUsersQuery } from "../redux/features/adminSlice";

const DashboardHomeTable = () => {
  // State to manage modal visibility and selected user
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users using the query hook
  const { data: usersData, isLoading, isError } = useAllUsersQuery({
    page: 1,
    limit: 1000,
    total: 6,
    totalPages: 1,
    role: "SUB_ADMIN",
  });

  // Table columns
  const columns = [
    {
      title: "#SI",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="flex items-center justify-around text-center">
          <button
            className="bg-[#DC2626] text-white px-[42px] py-[10px] text-sm rounded"
            onClick={() => showModal(record)}
          >
            View
          </button>
        </div>
      ),
    },
  ];

  // Prepare data from the API response
  const data = usersData?.data?.map((user, index) => ({
    transIs: `${index + 1}`,
    name: user.name,
    email: user.email,
    phone: user.phone || "N/A",
    action: "View",
    _id: user.id,
  })) || [];

  // Function to show modal and set selected user
  const showModal = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  // Function to handle modal cancel
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  return (
    <div className="rounded-lg border py-4 border-gray-500 mt-8 recent-users-table">
      <h3 className="text-2xl text-white mb-4 pl-2">Sub-Admins</h3>
      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
        className="rounded-lg text-white"
        rowKey="_id"
      />
      {/* Modal for displaying user details */}
      <Modal
        title="User Details"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <button
            key="close"
            className="bg-[#DC2626] text-white px-4 py-2 rounded"
            onClick={handleCancel}
          >
            Close
          </button>,
        ]}
      >
        {selectedUser ? (
          <div className="space-y-4">
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>ID:</strong> {selectedUser._id}
            </p>
            {/* Add more fields as needed */}
          </div>
        ) : (
          <p>No user selected</p>
        )}
      </Modal>
    </div>
  );
};

export default DashboardHomeTable;