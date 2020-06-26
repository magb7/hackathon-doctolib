import React from "react";
import "./styles/Sidebar.css";
import Popup from "reactjs-popup";
import PatientModal from "./PatientModal";

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
              <Popup
                trigger={
                  <li className="settings">
                    {" "}
                    <img src="/icons/gear.png" alt="settings" />
                    <span>Settings</span>
                  </li>
                }
                contentStyle={{
                  width: "400px",
                  borderRadius: "5px",
                  paddingRight: "2px",
                }}
                position="right center"
                closeOnDocumentClick
              >
                {(close) => <PatientModal close={close} />}
              </Popup>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default SidebarPatient;
