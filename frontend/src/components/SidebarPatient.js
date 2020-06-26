import React from "react";
import { Link } from "react-router-dom";
import "./styles/Sidebar.css";
import Popup from "reactjs-popup";
import PatientModal from "./PatientModal";
//import PatientsContext from '../contexts/patients-context';
//import Patients from '../Patients';

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
                  marginLeft: "35px",
                }}
                position="right center"
                closeOnDocumentClick
              >
                {(close) => <PatientModal close={close} name={props.name} />}
              </Popup>
              <Link to="/">
                <li className="settings">
                  <img src="/icons/logout.png" alt="settings" title="logout" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};
export default SidebarPatient;
