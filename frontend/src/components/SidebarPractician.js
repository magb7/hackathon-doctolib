import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PatientsContext from "../contexts/patients-context";
import Patients from "../Patients";
import "./styles/Sidebar.css";

const SidebarPractician = () => {
  const { patients, setPatients, setTitle } = useContext(PatientsContext);

  const getBookmarks = () => {
    const atRiskPatients = patients.filter((patient) => {
      return patient.atRisk === true;
    });
    setPatients(atRiskPatients);
    setTitle("Patients Bookmarks");
  };

  const getAllPatients = () => {
    setPatients([...Patients]);
    setTitle("Patients Lists");
  };

  const getLatest = () => {
    const LatestPatients = patients.sort((a, b) => {
      return Date.parse(b.lastAppointment) - Date.parse(a.lastAppointment);
    });
    setPatients([...LatestPatients]);
    setTitle("Latest Appointments");
  };

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
              <li
                onClick={() => {
                  getLatest();
                }}
              >
                <img
                  src="/icons/calendar.png"
                  alt="Latest medical appointments"
                />
                <span>Latest appointments</span>
              </li>
              <li
                onClick={() => {
                  getAllPatients();
                }}
              >
                <img src="/icons/list.png" alt="list" />
                <span>Patients lists</span>
              </li>
              <li
                onClick={() => {
                  getBookmarks();
                }}
              >
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
