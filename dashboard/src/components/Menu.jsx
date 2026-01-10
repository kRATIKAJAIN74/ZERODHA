import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import LogoutButton from "./LogOutButton";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfiledropDownOpen] = useState(false);

  const { user, setUser } = useContext(GeneralContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfiledropDownOpen(!isProfileDropDownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );

      setUser(null); // optional but clean
      window.location.href =  `${process.env.REACT_APP_FRONTEND_URL}`;
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}} onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{textDecoration:"none"}} onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{textDecoration:"none"}} onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link to="/positions" style={{textDecoration:"none"}} onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link to="/funds" style={{textDecoration:"none"}} onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link to="/apps" style={{textDecoration:"none"}} onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* 🔥 PROFILE SECTION */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {user?.username?.slice(0, 2).toUpperCase() || "U"}
          </div>
          <p className="username">{user?.username || "User"}</p>
        </div>

        {/* 🔥 DROPDOWN */}
        {isProfileDropDownOpen && (
          <div className="profile-dropdown">
            <button className="logout-btn" style={{border:"none"}} onClick={handleLogout}>
              <LogoutButton/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
