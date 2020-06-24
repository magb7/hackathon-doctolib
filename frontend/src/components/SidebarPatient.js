import React from "react";
import "./styles/Sidebar.css";
const SidebarPatient = () => {
  return (
    <>
      <aside className="navbar">
        <div className="menu">
          <div className="menu__info">
            <img src="/icons/user.png" alt="default avatar" />
            <h4>Angela Gonzales</h4>
          </div>
          <nav>
            <ul>
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
export default SidebarPatient;
