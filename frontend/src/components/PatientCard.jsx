import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PatientsContext from "../contexts/patients-context";

import "./styles/PatientCard.css";

const PatientCard = () => {
  const { patients, setPatients, title } = useContext(PatientsContext);

  const toggleAtRisk = (index) => {
    let togglePatients = [...patients];
    togglePatients[index].atRisk
      ? (togglePatients[index].atRisk = false)
      : (togglePatients[index].atRisk = true);
    setPatients([...togglePatients]);
  };

  return (
    <>
      <p className="page_title">{title}</p>
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
                  toggleAtRisk(index);
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
