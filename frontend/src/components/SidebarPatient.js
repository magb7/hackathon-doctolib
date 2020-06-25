import React from "react";
import "./styles/Sidebar.css";
const SidebarPatient = (props) => {
  return (
    <>
      <aside className="navbar">
        <div className="menu">
          <div className="menu__info">
            <img src="/icons/user.png" alt="default avatar" />
            <h4>{props.name}</h4>
          </div>
          <nav>
            <ul>
              <li className="settings">
                <img src="/icons/logout.png" alt="settings" />
                <span>Logout</span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default SidebarPatient;
