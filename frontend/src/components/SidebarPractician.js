import React from "react";
import "./styles/Sidebar.css";

const SidebarPractician = () => {
  return (
    <>
      <aside className="navbar">
        <div className="menu">
          <div className="menu__info">
            <a href="">
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="practician pic"
              />
            </a>
          </div>
          <nav>
            <ul>
              <a>
                <li>
                  <img src="/icons/dashboard.png" alt="dashboard menu" />
                  <span>Dashboard</span>
                </li>
              </a>
              <li>
                <img src="/computer.png" alt="Latest medical appointments" />
                <span>Latest medical appointments</span>
              </li>
              <a href="">
                <li>
                  <img src="/steam.png" alt="bookmark" />
                  <span>Patients lists</span>
                </li>
              </a>
              <li>
                <img src="/paint.png" alt="theme" />
                <span>Patients bookmarks</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default SidebarPractician;
