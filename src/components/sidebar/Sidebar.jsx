import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const MENU_LIST_ITEMS = [
  {
    title: "Main",
    type: "header",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Lists",
    type: "header",
  },
  {
    title: "Users",
    icon: <PersonOutlineIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Products",
    icon: <StoreIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Orders",
    icon: <CreditCardIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Delivry",
    icon: <LocalShippingIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Useful",
    type: "header",
  },
  {
    title: "Notifications",
    icon: <NotificationsNoneIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Stats",
    icon: <InsertChartIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Service",
    type: "header",
  },
  {
    title: "System Health",
    icon: <SettingsSystemDaydreamOutlinedIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Logs",
    icon: <PsychologyOutlinedIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Settings",
    icon: <SettingsApplicationsIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "User",
    type: "header",
  },
  {
    title: "Profile",
    icon: <AccountCircleOutlinedIcon className="icon" />,
    to: "",
    type: "link",
  },
  {
    title: "Loggout",
    icon: <ExitToAppIcon className="icon" />,
    to: "",
    type: "link",
  },
];
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">JoeAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {MENU_LIST_ITEMS.map((item) =>
            item.type === "header" ? (
              <p key={item.title} className="title">
                {item.title}
              </p>
            ) : (
              <li>
                {item.icon}
                <Link key={item.title} to={item.to}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;
