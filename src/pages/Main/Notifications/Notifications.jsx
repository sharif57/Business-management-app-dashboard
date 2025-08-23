import { FaAngleLeft } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAllNotificationQuery } from "../../../redux/features/notificationSlice";
import { format } from "date-fns";

const Notifications = () => {
  const navigate = useNavigate();
  const { data: notificationData, isLoading, error } = useAllNotificationQuery({
    page: 1,
    limit: 10,
  });

  console.log("Notification Data:", notificationData);

  // Map API data to notification items
  const notifications = notificationData?.data?.map((notification) => ({
    id: notification.id,
    message: `${notification.type === "HARD" ? "Important" : "Reminder"}: ${notification.body.substring(0, 50)}...`,
    date: format(new Date(), "EEE, hh:mm a"), // Current date/time: Thu, 04:29 PM
    type: notification.type,
  })) || [];

  // Pagination metadata
  const { page, limit, total, totalPages } = notificationData?.meta?.pagination || {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  };

  if (isLoading) {
    return (
      <div className="rounded-lg min-h-screen bg-[#FDFDFD] p-[24px] text-white">
        Loading notifications...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg min-h-screen bg-[#FDFDFD] p-[24px] text-white">
        Error loading notifications. Please try again.
      </div>
    );
  }

  return (
    <div className="rounded-lg min-h-screen bg-[#FDFDFD]">
      <div className="px-[32px] py-6 text-white bg-info rounded-t-lg flex items-center gap-3">
        <FaAngleLeft
          onClick={() => navigate(-1)}
          className="text-white cursor-pointer"
          size={34}
        />
        <h1 className="text-[30px] text-[#052255] font-bold">All Notifications</h1>
      </div>
      <div className="p-[24px]">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="group flex items-center gap-4 px-[24px] py-4 cursor-pointer border-b border-blue-50 hover:bg-gray-100 transition-all"
          >
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={`border border-white w-[42px] h-[42px] rounded-lg p-1.5 shadow-sm bg-[#B2DAC4] text-info group-hover:bg-[#b3dfc7]`}
            />
            <div className="space-y-[2px]">
              <h6 className="text-lg">{notification.message}</h6>
              <small className="text-[12px] text-gray-500">{notification.date}</small>
            </div>
          </div>
        ))}
        {/* Basic Pagination (static for now) */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 text-white">
            Page {page} of {totalPages}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;