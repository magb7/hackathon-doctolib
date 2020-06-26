import React from "react";
import "./styles/Sidebar.css";
import ScrollDialog from "./Modal";
import { Link } from "react-router-dom";

const SidebarPatient = (props) => {
  return (
    <>
      <aside className="navbar">
        <div className="menu">
          <div className="menu__info">
            <img src="/icons/user.png" alt="default avatar" />
            <h4>{props.name}</h4>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <ScrollDialog name={props.name} />
                  <span>Settings</span>
                </li>
                <Link to="/">
                  <li className="settings">
                    <img
                      src="/icons/logout.png"
                      alt="settings"
                      title="logout"
                    />
                    <span>Logout</span>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};
export default SidebarPatient;
