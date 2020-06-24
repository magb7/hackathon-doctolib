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
              <Link to="/">
                <li>
                  <img src="/icons/dashboard.png" alt="dashboard menu" />
                  <span>Dashboard</span>
                </li>
              </Link>
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
              <li className="settings">
                <img src="/icons/gear.png" alt="settings" />
                <span>Settings</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default SidebarPractician;
