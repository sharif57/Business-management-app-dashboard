import { CiSettings, CiUser } from "react-icons/ci";
import { RiDashboardHorizontalFill, RiUserStarLine } from "react-icons/ri";
import DashboardHome from "../pages/Main/DashboardHome/DashboardHome";
import MyProfile from "../pages/Profile/MyProfile";
import EditMyProfile from "../pages/Profile/EditMyProfile";
import TermsConditions from "../pages/Settings/TermsConditions";
import EditTermsConditions from "../pages/Settings/EditTermsConditions";
import PrivacyPolicy from "../pages/Settings/PrivacyPolicy";
import EditPrivacyPolicy from "../pages/Settings/EditPrivacyPolicy";
import { MdOutlineSecurityUpdateWarning } from "react-icons/md";
import HostDetails from "../pages/Main/Host/HostDetails";
import { FaServicestack } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import Setting from "../pages/Main/Setting/Setting";
import ChangePassword from "../pages/Main/Setting/Change-password/ChangePassword";
import ForgotPassword from "../pages/Main/Setting/Change-password/ForgotPassword";
import VerifyEmail from "../pages/Main/Setting/Change-password/VerifyEmail";
import Trust from "../pages/Settings/Trust";
import EditTrust from "../pages/Settings/EditTrust";

import { IoSettingsOutline } from "react-icons/io5";
import CreateAdminForm from "../pages/Main/CreateAdminForm/CreateAdminForm";
import Campaigns from "../pages/Main/Campaigns/Campaigns";
import CreateCampaign from "../pages/Main/Campaigns/CreateCampaign";
import Analytics from "../pages/Main/Analytics/Analytics";
import { BellDot, ChartLine, CreditCard } from "lucide-react";
import Influencers from "../pages/Main/Users/Influencers";
import Payment from "../pages/Main/Payment/Payment";
import Notification from "../pages/Main/Support/Notification";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import Notifications from "../pages/Main/Notifications/Notifications";

export const dashboardItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: RiDashboardHorizontalFill,
    element: <DashboardHome />,
  },

  {
    name: "Influencers",
    path: "influencers",
    icon: RiUserStarLine,
    element: <Influencers />,
  },
  {
    path: "createAdmin-form",
    element: <CreateAdminForm />,
  },

  {
    name: "Campaigns",
    path: "campaigns",
    icon: PiSpeakerSimpleHighFill ,
    element: <Campaigns />,
  },
  {
    path: "create-campaigns",
    element: <CreateCampaign />,
  },
  {
    name: "Analytics",
    path: "analytics",
    icon: ChartLine,
    element: <Analytics />,
  },
  {
    name: "Payment",
    path: "payment",
    icon: CreditCard ,
    element: <Payment />,
  },
  {
    name: "Notification",
    path: "support",
    icon: BellDot ,
    element: <Notification />,
  },
  {
    path: "notifications",
    element: <Notifications />,
  },
  {
    name: "Setting",
    path: "settings",
    icon: IoSettingsOutline,
    element: <Setting />,
  },
  {
    path: "/hosts/:id",
    element: <HostDetails />,
  },
  {
    name: "Settings",
    rootPath: "settings",
    icon: CiSettings,
    children: [
      {
        name: "Personal Information",
        path: "settings/profile",
        icon: CiUser,
        element: <MyProfile />,
      },
      {
        path: "settings/profile/edit",
        element: <EditMyProfile />,
      },
      {
        name: "Change Password",
        icon: FaServicestack,
        path: "settings/change-password",
        element: <ChangePassword />,
      },
      {
        path: "settings/change-password/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "settings/change-password/forgot-password/verify-email",
        element: <VerifyEmail />,
      },
      {
        name: "Terms & Condition",
        icon: FaServicestack,
        path: "settings/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "settings/terms-conditions/edit",
        element: <EditTermsConditions />,
      },
      {
        name: "Privacy Policy",
        icon: MdOutlineSecurityUpdateWarning,
        path: "settings/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/privacy-policy/edit",
        element: <EditPrivacyPolicy />,
      },
      {
        name: "Trust & Safety",
        icon: BiMessageSquareDetail,
        path: "settings/trust-safety",
        element: <Trust />,
      },
      {
        path: "settings/trust-safety/edit",
        element: <EditTrust />,
      },
    ],
  },
];
