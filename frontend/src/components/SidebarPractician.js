import React from "react";
import { Link } from "react-router-dom";
import "./styles/Sidebar.css";
const SidebarPractician = () => {
  return (
    <>
      <aside className="navbar">
        <div className="menu">
          <div className="menu__info">
            <img
              src="https://randomuser.me/api/portraits/women/4.jpg"
              alt="practician pic"
            />
            <h4>Dr Emily Carlton</h4>
          </div>
          <nav>
            <ul>
              <li>
                <img src="/icons/dashboard.png" alt="dashboard menu" />
                <span>Dashboard</span>
              </li>
              <li>
                <img
                  src="/icons/calendar.png"
                  alt="Latest medical appointments"
                />
                <span>Latest appointments</span>
              </li>
              <li>
                <img src="/icons/list.png" alt="list" />
                <span>Patients lists</span>
              </li>
              <li>
                <img src="/icons/bookmark.png" alt="bookmark" />
                <span>Patients bookmarks</span>
              </li>
              <Link to="/">
                <li className="settings">
                  <img src="/icons/gear.png" alt="settings" title="logout" />
                  <span>Settings</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default SidebarPractician;
