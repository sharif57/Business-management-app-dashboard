
// import { useState } from "react";
// import {  Search } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useCompromisesNotificationQuery, useScheduledNotificationQuery, useSendNotificationListQuery, useSendNotificationMutation } from "../../../redux/features/notificationSlice";
// import { useAllInfluencerQuery } from "../../../redux/features/influencerSlice";

// const initialScheduledData = [
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Soft Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", dateTime: "Feb 12, 2025 | 10:53 AM" },
// ];

// const initialSentData = [
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
// ];

// const initialCompromiseData = [
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
//   { name: "Jane Cooper", type: "Hard Reminder", message: "Deadline Reminder\nYour campaign 'Adidas Running' requires you to upload performance metrics", sent: "Feb 12, 2025 | 10:53 AM", compromised: "Feb 12, 2025 | 10:53 AM" },
// ];

// export default function Notification() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("Compromise"); // Default to "Compromise" to match the image
//   const [searchQuery, setSearchQuery] = useState("");
//   const [scheduledData, setScheduledData] = useState(initialScheduledData);
//   const [sentData, setSentData] = useState(initialSentData);
//   const [compromiseData, setCompromiseData] = useState(initialCompromiseData);

//   const {data: influencerlist} = useAllInfluencerQuery();
//   const {data: scheduledlist} = useScheduledNotificationQuery();
//   const {data: sendlist} = useSendNotificationListQuery();
//   const {data: compromiselist} = useCompromisesNotificationQuery();

//   const [sendNotification]=  useSendNotificationMutation();

//   const tabs = ["Influencers", "Scheduled", "Sent", "Compromise"];

//   const handleSendNotification = (index) => {
//     const itemToSend = scheduledData[index];
//     if (itemToSend) {
//       const currentDateTime = "Aug 26, 2025 | 11:27 AM"; // Updated to current date and time
//       setSentData([...sentData, { ...itemToSend, type: "Hard Reminder", sent: currentDateTime, compromised: currentDateTime }]);
//       setScheduledData(scheduledData.filter((_, i) => i !== index));
//     }
//   };

//   const handleCompromiseNotification = (index) => {
//     const itemToCompromise = sentData[index];
//     if (itemToCompromise) {
//       const currentDateTime = "Aug 26, 2025 | 11:27 AM"; // Current date and time
//       setCompromiseData([...compromiseData, { ...itemToCompromise, compromised: currentDateTime }]);
//       setSentData(sentData.filter((_, i) => i !== index));
//     }
//   };

//   const renderTable = (data, columns, showSendButton = false, showCompromiseButton = false) => (
//     <div className="bg-[#19262b] rounded overflow-hidden">
//       <div className="bg-[#DC2626] px-6 py-4">
//         <div className="grid grid-cols-5 gap-6 text-sm font-medium text-white text-center">
//           {columns.map((col, index) => (
//             <div key={index} className="text-center">{col}</div>
//           ))}
//         </div>
//       </div>
//       <div className="divide-y divide-slate-600">
//         {data.map((item, index) => (
//           <div key={index} className="px-6 py-4 hover:bg-slate-600 transition-colors">
//             <div className="grid grid-cols-5 gap-6 items-center text-sm text-center">
//               <div className="text-white">{item.name}</div>
//               <div className="text-white">{item.type}</div>
//               <div className="text-white whitespace-pre-wrap">{item.message}</div>
//               {activeTab === "Scheduled" ? (
//                 <div className="text-white flex justify-center items-center gap-2">
//                   {item.dateTime}
//                   {showSendButton && (
//                     <button
//                       onClick={() => handleSendNotification(index)}
//                       className="bg-[#DC2626] hover:bg-[#DC2626]-700 text-white px-4 py-2 text-xs font-medium transition-colors"
//                     >
//                       Send
//                     </button>
//                   )}
//                 </div>
//               ) : activeTab === "Sent" ? (
//                 <div className="flex justify-center items-center gap-2">
//                   <div className="text-white">{item.sent}</div>
//                   {showCompromiseButton && (
//                     <button
//                       onClick={() => handleCompromiseNotification(index)}
//                       className="bg-[#DC2626] hover:bg-[#DC2626]-700 text-white px-4 py-2 text-xs font-medium transition-colors"
//                     >
//                       Compromise
//                     </button>
//                   )}
//                 </div>
//               ) : (
//                 <div className="flex justify-center gap-6">
//                   <div className="text-white">{item.sent}</div>
//                   <div className="text-white">{item.compromised}</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen text-white p-6">
//       {/* Navigation Tabs */}
//       <div className="flex justify-start gap-4 mb-8">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-8 py-2 text-sm font-medium transition-colors ${
//               activeTab === tab ? "bg-[#DC2626] text-white" : "border border-[#495559] text-slate-300 hover:bg-slate-600"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Search Bar */}
//       <div className="relative mb-8">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Search by name or social handle"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full bg-[#19262b] border border-slate-600 rounded px-10 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
//         />
//       </div>

//       {/* Data Table */}
//       {/* {activeTab === "Scheduled" && renderTable(scheduledData, ["Influencer Name", "Notification Type", "Message", "Date & Time"], true)} */}
//       {activeTab === "Scheduled" && (
//             <div className="bg-[#19262b] rounded overflow-hidden">
//             <div className="bg-[#DC2626] px-6 py-4">
//             <div className="grid grid-cols-4 gap-4 text-sm font-medium text-white text-center">
//               <div>Influencer Name</div>
//               <div>Notification Type</div>
//               <div>Message</div>
//               <div>Date & Time</div>
//             </div>
//           </div>
//           <div className="divide-y divide-slate-600">
//             {scheduledData.map((item, index) => (
//               <div key={index} className="px-6 py-4 hover:bg-slate-600 transition-colors">
//                 <div className="grid grid-cols-4 gap-6 items-center text-sm text-center">
//                   <div className="text-white">{item.name}</div>
//                   <div className="text-slate-300">@janecooper</div>
//                   <div className="text-slate-300">{item.message}</div>
//                   <div className="text-slate-300">{item.dateTime}</div>
                
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//       )}
//       {/* {activeTab === "Sent" && renderTable(sentData, ["Influencer Name", "Notification Type", "Message", "Sent", "Compromise"], false, true)} */}
//       {activeTab === "Sent" && (
//         <div className="bg-[#19262b] rounded overflow-hidden">
//           <div className="bg-[#DC2626] px-6 py-4">
//             <div className="grid grid-cols-4 gap-6 text-sm font-medium text-white text-center">
//               <div>Influencer Name</div>
//               <div>Notification Type</div>
//               <div>Message</div>
//               {/* <div>Sent</div> */}
//               <div>Date & Time</div>
//             </div>
//           </div>
//           <div className="divide-y divide-slate-600">
//            {sendlist.data?.data?.map((item, index) => (
//           <div key={index} className="px-6 py-4 hover:bg-slate-600 transition-colors">
//             <div className="grid grid-cols-4 gap-6 items-center text-sm text-center">
//               <div className="text-white">{item.recipientName}</div>
//               <div className="text-slate-300">{item.type}</div>
//               <div className="text-slate-300">{item.body}</div>
//               <div className="text-slate-300">
//                 {new Date(item.createdAt).toLocaleString()}
//               </div>
//             </div>
//           </div>
//         ))}
//           </div>
//         </div>
//       )}
//       {/* {activeTab === "Compromise" && renderTable(compromiseData, ["Influencer Name", "Notification Type", "Message", "Sent", "Compromise"])} */}
//       {activeTab === "Compromise" && (
//         <div className="bg-[#19262b] rounded overflow-hidden">
//           <div className="bg-[#DC2626] px-6 py-4">
//             <div className="grid grid-cols-5 gap-6 text-sm font-medium text-white text-center">
//               <div>Influencer Name</div>
//               <div>Notification Type</div>
//               <div>Message</div>
//               <div>Sent</div>
//               <div>Compromise</div>
//             </div>
//           </div>
//           <div className="divide-y divide-slate-600">
//             {compromiseData.map((item, index) => (
//               <div key={index} className="px-6 py-4 hover:bg-slate-600 transition-colors">
//                 <div className="grid grid-cols-5 gap-6 items-center text-sm text-center">
//                   <div className="text-white">{item.name}</div>
//                   <div className="text-slate-300">{item.type}</div>
//                   <div className="text-slate-300">{item.message}</div>
//                   <div className="text-slate-300">{item.sent}</div>
//                   <div className="text-slate-300">{item.compromised}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {activeTab === "Influencers" && (
//         <div className="bg-[#19262b] rounded overflow-hidden">
//           <div className="bg-[#DC2626] px-6 py-4">
//             <div className="grid grid-cols-5 gap-6 text-sm font-medium text-white text-center">
//               <div>Name</div>
//               <div>Social Handle</div>
//               <div>Followers</div>
//               <div>Campaigns</div>
//               <div>Action</div>
//             </div>
//           </div>
//           <div className="divide-y divide-slate-600">
//             {scheduledData.map((item, index) => (
//               <div key={index} className="px-6 py-4 hover:bg-slate-600 transition-colors">
//                 <div className="grid grid-cols-5 gap-6 items-center text-sm text-center">
//                   <div className="text-white">{item.name}</div>
//                   <div className="text-slate-300">@janecooper</div>
//                   <div className="text-slate-300">85k</div>
//                   <div className="text-slate-300">Adidas Running</div>
//                   <div>
//                     <Link to={'/notification/send-notification'}>
//                     <button
//                       onClick={() => handleSendNotification(index)}
//                       className="bg-[#DC2626] hover:bg-[#DC2626]-700 text-white px-4 py-2 text-xs font-medium transition-colors"
//                     >
//                       Send Notification
//                     </button>
//                   </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAllInfluencerQuery } from '../../../redux/features/influencerSlice';
import { useCompromisesNotificationQuery, useScheduledNotificationQuery, useSendNotificationListQuery, useSendNotificationMutation } from '../../../redux/features/notificationSlice';


export default function Notification() {
  const [activeTab, setActiveTab] = useState('Compromise');
  const [searchQuery, setSearchQuery] = useState('');
  const [pages, setPages] = useState({
    Influencers: 1,
    Scheduled: 1,
    Sent: 1,
    Compromise: 1,
  });
  const limit = 10;

  const { data: influencerList, isLoading: influencerLoading, isError: influencerError } = useAllInfluencerQuery({
    page: pages.Influencers,
    limit,
    total: 0,
    totalPages: 1,
  });
  const { data: scheduledList, isLoading: scheduledLoading, isError: scheduledError } = useScheduledNotificationQuery({
    page: pages.Scheduled,
    limit,
    total: 0,
    totalPages: 1,
  });
  const { data: sentList, isLoading: sentLoading, isError: sentError } = useSendNotificationListQuery({
    page: pages.Sent,
    limit,
    total: 0,
    totalPages: 1,
  });
  const { data: compromiseList, isLoading: compromiseLoading, isError: compromiseError } = useCompromisesNotificationQuery({
    page: pages.Compromise,
    limit,
    total: 0,
    totalPages: 1,
  });

  const tabs = ['Influencers', 'Scheduled', 'Sent', 'Compromise'];

  const handlePageChange = (tab, newPage) => {
    setPages((prev) => ({ ...prev, [tab]: newPage }));
  };

  // const handleSendNotification = async (item) => {
  //   try {
  //     const notificationData = {
  //       title: item.title || 'Notification',
  //       body: item.body,
  //       influencerId: item.recipientId,
  //       scheduledAt: item.scheduledAt,
  //       type: 'HARD', // Update type to HARD when sent
  //     };
  //     await sendNotification(notificationData).unwrap();
  //     // Invalidate tags to refetch data
  //   } catch (error) {
  //     console.error('Failed to send notification:', error);
  //   }
  // };

  const filterData = (data, fields) => {
    if (!searchQuery) return data;
    return data.filter((item) =>
      fields.some((field) => item[field]?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  const renderTable = (data, columns, tab, showSendButton = false, pagination) => (
    <div className="bg-[#19262b] rounded overflow-hidden">
      <div className="bg-[#DC2626] px-6 py-4">
        <div className={`grid ${columns.length === 5 ? 'grid-cols-5' : 'grid-cols-4'} gap-6 text-sm font-medium text-white text-center`}>
          {columns.map((col, index) => (
            <div key={index} className="text-center">{col}</div>
          ))}
        </div>
      </div>
      <div className="divide-y divide-slate-600">
        {data.map((item, index) => (
          <div key={item.id || index} className="px-6 py-4 hover:bg-slate-600 transition-colors">
            <div className={`grid ${columns.length === 5 ? 'grid-cols-5' : 'grid-cols-4'} gap-6 items-center text-sm text-center`}>
              {tab === 'Influencers' && (
                <>
                  <div className="text-white">{item.name}</div>
                  <div className="text-slate-300">{item.socials[0]?.platform || 'N/A'}</div>
                  <div className="text-slate-300">{item.socials[0]?.followers?.toLocaleString() || '0'}</div>
                  <div className="text-slate-300">{item?.role}</div>
                  <div>
                    <Link to={`/notification/send-notification?id=${item.id}`}>
                      <button
                        className="bg-[#DC2626] hover:bg-[#b91c1c] text-white px-4 py-2 text-xs font-medium transition-colors"
                      >
                        Send Notification
                      </button>
                    </Link>
                  </div>
                </>
              )}
              {tab === 'Scheduled' && (
                <>
                  <div className="text-white">{item.recipientName}</div>
                  <div className="text-slate-300">{item.type}</div>
                  <div className="text-slate-300 truncate">{item.body}</div>
                  <div className="text-slate-300 flex justify-center items-center gap-2">
                    {new Date(item.scheduledAt).toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})}

                  </div>
                </>
              )}
              {tab === 'Sent' && (
                <>
                  <div className="text-white">{item.recipientName}</div>
                  <div className="text-slate-300">{item.type}</div>
                  <div className="text-slate-300 truncate">{item.body}</div>
                  <div className="text-slate-300">
                    {/* {new Date(item.createdAt).toLocaleString()} */}
                    {new Date(item.createdAt).toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})}
                    </div>
                </>
              )}
              {tab === 'Compromise' && (
                <>
                  <div className="text-white">{item.influencerName}</div>
                  <div className="text-slate-300">{item.notificationTitle}</div>
                  <div className="text-slate-300 truncate">{item.notificationTitle}</div>
                  <div className="text-slate-300">{new Date(item.sentDate).toLocaleString()}</div>
                  <div className="text-slate-300">
                    
                    {/* {new Date(item.compromiseDate).toLocaleString()} */}

                    {new Date(item.compromiseDate).toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})}


                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {pagination && (
        <div className="flex justify-between items-center px-6 py-4 text-white text-sm">
          <div>
            Page {pagination.page} of {pagination.totalPages} (Total: {pagination.total} {tab.toLowerCase()})
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => handlePageChange(tab, pages[tab] - 1)}
              disabled={pagination.page === 1}
              className={`px-4 py-2 rounded ${
                pagination.page === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#DC2626] hover:bg-[#b91c1c]'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(tab, pages[tab] + 1)}
              disabled={pagination.page === pagination.totalPages}
              className={`px-4 py-2 rounded ${
                pagination.page === pagination.totalPages ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#DC2626] hover:bg-[#b91c1c]'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'Influencers') {
      if (influencerLoading) return <div className="text-white text-center py-4">Loading...</div>;
      if (influencerError || !influencerList?.data) return <div className="text-red-500 text-center py-4">Error loading influencers</div>;
      const filteredData = filterData(influencerList.data, ['name', 'socials[0].platform']);
      return renderTable(filteredData, ['Name', 'Social Handle', 'Followers', 'Role', 'Action'], 'Influencers', false, influencerList.meta.pagination);
    }
    if (activeTab === 'Scheduled') {
      if (scheduledLoading) return <div className="text-white text-center py-4">Loading...</div>;
      if (scheduledError || !scheduledList?.data) return <div className="text-red-500 text-center py-4">Error loading scheduled notifications</div>;
      const filteredData = filterData(scheduledList.data, ['recipientName']);
      return renderTable(filteredData, ['Influencer Name', 'Notification Type', 'Message', 'Date & Time'], 'Scheduled', true, scheduledList.meta.pagination);
    }
    if (activeTab === 'Sent') {
      if (sentLoading) return <div className="text-white text-center py-4">Loading...</div>;
      if (sentError || !sentList?.data) return <div className="text-red-500 text-center py-4">Error loading sent notifications</div>;
      const filteredData = filterData(sentList.data, ['recipientName']);
      return renderTable(filteredData, ['Influencer Name', 'Notification Type', 'Message', 'Date & Time'], 'Sent', false, sentList.meta.pagination);
    }
    if (activeTab === 'Compromise') {
      if (compromiseLoading) return <div className="text-white text-center py-4">Loading...</div>;
      if (compromiseError || !compromiseList?.data) return <div className="text-red-500 text-center py-4">Error loading compromises</div>;
      const filteredData = filterData(compromiseList.data, ['influencerName']);
      return renderTable(filteredData, ['Influencer Name', 'Notification Type', 'Message', 'Sent', 'Compromise'], 'Compromise', false, compromiseList.meta.pagination);
    }
  };

  return (
    <div className="min-h-screen text-white p-6">
      {/* Navigation Tabs */}
      <div className="flex justify-start gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-[#DC2626] text-white' : 'border border-[#495559] text-slate-300 hover:bg-slate-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or social handle"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#19262b] border border-slate-600 rounded px-10 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-slate-500"
        />
      </div>
      {/* Data Table */}
      {renderContent()}
    </div>
  );
}