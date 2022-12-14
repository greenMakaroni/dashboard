import "./sidebar.scss"

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

const Sidebar = () => {
  return (
    <div className="sidebar">

        <div className="top">
            <span className="logo">
                Dashboard
            </span>
        </div>

        <hr />

        <div className="center">
            <ul>
                <p className="title"> Main </p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>


                <p className="title"> Lists </p>
                <li>
                    <PersonOutlineIcon className="icon" />
                    <span>Users</span>
                </li>
                <li>
                    <StoreIcon className="icon" />
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon" />
                    <span>Delivery</span>
                </li>


                    <p className="title"> Information </p>
                <li>
                    <InsertChartIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                    <span>System health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>

                
                <p className="title"> User </p>
                <li>
                    <SettingsApplicationsIcon className="icon" />
                    <span>Settings</span>
                </li>
                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>

        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>

    </div>
  )
}

export default Sidebar