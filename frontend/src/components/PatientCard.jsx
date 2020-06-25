import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PatientsContext from "../contexts/patients-context";

import "./styles/PatientCard.css";
import Patients from "../Patients";

const PatientCard = () => {
  const { patients, setPatients } = useContext(PatientsContext);

  const toggleAtRisk = (id) => {
    console.log(id);
    const togglePatients = patients.map((patient) => {
      if (patient.id === id) {
        console.log(patient.id);
        console.log(patient.atRisk);
      }
    });
    console.log(togglePatients);
  };

  return (
    <>
      {patients.map((patient, index) => {
        return (
          <div className="card" key={index}>
            <div className="card_title">
              <div className="card_name">
                <p>
                  {patient.firstname} {patient.lastname}
                </p>
              </div>
              <div
                onClick={() => {
                  console.log("toggle atRisk");
                  toggleAtRisk(patient.id);
                }}
                className="card_icons"
              >
                {patient.atRisk ? (
                  <img src="/icons/bookmark_orange.png" alt="bookmark" />
                ) : (
                  <img
                    src="/icons/bookmark-gray2.png"
                    alt="bookmark"
                    className="card_icons_disabled"
                  />
                )}
              </div>
            </div>
            <div className="card_info">
              <div className="card_mail">
                <ul>
                  Information contact:
                  <li>
                    <img
                      className="card_mail_img"
                      src="/icons/mail-01.svg"
                      alt="mail icon"
                    />
                    {patient.email}
                  </li>
                  <li>
                    <img
                      className="card_phone_img"
                      src="/icons/phone-01.svg"
                      alt="mail icon"
                    />
                    {patient.phone}
                  </li>
                </ul>
              </div>
              <div className="card_maj">
                Last appointment: {patient.lastAppointment}
              </div>
            </div>
            <Link
              className="chat_btn"
              to={`/login/chat?name=${patient.name}&room=${patient.room}`}
            >
              <button>Start a conversation</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PatientCard;
