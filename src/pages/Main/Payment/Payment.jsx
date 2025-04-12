import { useState } from "react";
import { Table } from "antd";
import DashboardModal from "../../../Components/DashboardModal";

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "transIs",
      key: "transIs",
      render: (_, data) => (
        <div className="  items-center justify-around textcenter flex ">
          <img
            src={"/company.png"}
            alt=""
            className="btn  px-3 py-1 text-sm  cursor-pointer"
          />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Social Handle",
      dataIndex: "social",
      key: "social",
    },
    {
      title: "Campaign Name",
      key: "campaign",
      dataIndex: "campaign",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
    },
    {
      title: "Action",
      key: "Review",
      aligen: "center",
      render: (_, data) => (
        <div className="  items-center justify-around textcenter flex">
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

  const data = [];
  for (let index = 0; index < 20; index++) {
    data.push({
      transIs: `${index + 1}`,
      name: "Henry",
      social: "@SophiaVibes",
      campaign: "Samsung Galaxy Unpacked",
      amount: "$300",
      date: "16 Apr 2024",
      _id: index,
    });
  }
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="  space-x-6">
          <button className="btn bg-[#DC2626] text-white px-[42px] py-[10px] text-sm rounded">
            Pending
          </button>
          <button className="btn border text-white px-[42px] py-[10px] text-sm rounded">
            Processed
          </button>
        </div>
      </div>
      <div className="rounded-lg border py-4 border-black mt-8 recent-users-table">
        <h3 className="text-2xl text-white mb-4 pl-2">Earnings</h3>
        {/* Ant Design Table */}
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          className="rounded-lg"
        />

        {/* Dashboard Modal */}
        <DashboardModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          maxWidth="500px"
          backgroundColor="bg-[#EDEAF3]"
        >
          <div className="">
            <h2 className="text-lg text-center mb-4">Transaction Details</h2>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>Transaction ID :</p>
              <p>{modalData.transIs}</p>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>Date :</p>
              <p>{modalData.name}</p>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>User Name :</p>
              <p>{modalData.Email}</p>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>Mobile Phone :</p>
              <p>{modalData.Phone}</p>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>A/C number :</p>
              <p>{modalData.transIs}</p>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>A/C holder name :</p>
              <p>{modalData.transIs}</p>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>Transaction amount</p>
              <p>{modalData.transIs}</p>
            </div>
            <div className="flex justify-between mb-6 text-gray-600">
              <p>Service</p>
              <p>{modalData.transIs}</p>
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
