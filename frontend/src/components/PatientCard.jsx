import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PatientsContext from "../contexts/patients-context";
import SearchBar from "./SearchBar";
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
    <div className="list_container">
      <SearchBar />
      <h3 className="list_title">{title}</h3>
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
              to={`/chat/practician/${patient.name}/${patient.room}`}
            >
              <button>Start a conversation</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PatientCard;
