import {
  FaBell,
  FaCog,
  FaEnvelope,
  FaHome,
  FaNewspaper,
  FaPhone,
  FaPlus,
  FaRegBuilding,
  FaRegChartBar,
  FaSignOutAlt,
  FaTag,
  FaUser,
  FaUserLock,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import MenuLink from "../../shared/components/ui/MenuLink";
import Button from "../../shared/components/ui/Button";

function MenuAuthMobile() {
  const { user, logout } = useAuth();
  const userName = user?.name.split(" ")[0] as string;

  const handleLogout = () => logout();

  return (
    <>
      <div className="flex">
        <img
          src={user?.avatar}
          alt="User's avatar"
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-2 flex flex-col justify-center">
          <h2 className="text-sm font-semibold">Hey, {userName}!</h2>
          <p className="text-xs text-slate-600">{user?.email}</p>
        </div>
      </div>
      {user?.role === "recruiter" ? (
        <>
          <MenuLink to="/dashboard/messages">
            <FaEnvelope className="h-5 w-5" />
            <span className="ml-2">Messages</span>
          </MenuLink>
          <MenuLink to="/dashboard/notifications">
            <FaBell className="h-5 w-5" />
            <span className="ml-2">Notifications</span>
          </MenuLink>
          <hr />
          <MenuLink to="/dashboard/overview">
            <FaUserLock className="h-5 w-5" />
            <span className="ml-2">Overview</span>
          </MenuLink>
          <MenuLink to="/dashboard/analytics">
            <FaRegChartBar className="h-5 w-5" />
            <span className="ml-2">Analytics</span>
          </MenuLink>
          <MenuLink to="/dashboard/company">
            <FaRegBuilding className="h-5 w-5" />
            <span className="ml-2">Company Profile</span>
          </MenuLink>
          <MenuLink to="/dashboard/user">
            <FaUser className="h-5 w-5" />
            <span className="ml-2">My Profile</span>
          </MenuLink>
          <MenuLink to="/dashboard/applicants">
            <FaUsers className="h-5 w-5" />
            <span className="ml-2">Applicants</span>
          </MenuLink>
          <MenuLink to="/dashboard/jobs">
            <FaNewspaper className="h-5 w-5" />
            <span className="ml-2">Jobs</span>
          </MenuLink>
          <MenuLink to="/dashboard/newJob">
            <FaPlus className="h-5 w-5" />
            <span className="ml-2">Post a Job</span>
          </MenuLink>
          <hr />
          <MenuLink to="/dashboard/subscription">
            <FaTag className="h-5 w-5" />
            <span className="ml-2">Pricing Plans</span>
          </MenuLink>
          <MenuLink to="/dashboard/settings/account">
            <FaCog className="h-5 w-5" />
            <span className="ml-2">Settings</span>
          </MenuLink>
        </>
      ) : (
        <>
          <MenuLink to="/user/profile">
            <FaUser className="h-5 w-5" />
            <span className="ml-2">My Profile</span>
          </MenuLink>
          <MenuLink to="/user/messages">
            <FaEnvelope className="h-5 w-5" />
            <span className="ml-2">Messages</span>
          </MenuLink>
          <MenuLink to="/user/notifications">
            <FaBell className="h-5 w-5" />
            <span className="ml-2">Notifications</span>
          </MenuLink>
          <hr />
          <MenuLink to="/">
            <FaHome className="h-5 w-5" />
            <span className="ml-2">Home</span>
          </MenuLink>
          <MenuLink to="/privacyPolicy">
            <FaUserShield className="h-5 w-5" />
            <span className="ml-2">Privacy Policy</span>
          </MenuLink>
          <MenuLink to="/contact">
            <FaPhone className="h-5 w-5" />
            <span className="ml-2">Contact</span>
          </MenuLink>
        </>
      )}
      <hr />
      <Button
        onClick={handleLogout}
        className="group flex items-center rounded-md px-2 py-1 text-sm text-slate-500 transition-all hover:bg-primary"
      >
        <FaSignOutAlt className="h-5 w-5" />
        <span className="ml-2">Sign Out</span>
      </Button>
    </>
  );
}

export default MenuAuthMobile;
