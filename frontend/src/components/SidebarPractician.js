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
    const AllPatients = [...Patients].sort(function (a, b) {
      return a.lastname.localeCompare(b.lastname);
    });
    setPatients([...AllPatients]);
    setTitle("All patients");
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
              <li
                onClick={() => {
                  getAllPatients();
                }}
              >
                <img src="/icons/list.png" alt="list" />
                <span>All patients</span>
              </li>
              <li
                onClick={() => {
                  getLatest();
                }}
              >
                <img src="/icons/clock.png" alt="Latest medical appointments" />
                <span>Latest appointments</span>
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
export default SidebarPractician;
