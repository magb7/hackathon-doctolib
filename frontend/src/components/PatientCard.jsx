import React from "react";
import { Link } from "react-router-dom";
import "./styles/PatientCard.css";
import Patients from "../contexts/patients-context";

const PatientCard = () => {
  return (
    <>
      {Patients.map((patient) => {
        return (
          <div className="card">
            <div className="card_title">
              <div className="card_name">
                <p>
                  {patient.firstname} {patient.lastname}
                </p>
              </div>
              <div className="card_icons">
                {patient.atRisk ? (
                  <img src="/icons/bookmark_orange.png" alt="bookmark" />
                ) : null}
              </div>
            </div>
            <div className="card_info">
              <div className="card_mail">
                Information contact : {patient.email}
              </div>
              <div className="card_maj">
                Data update {patient.lastAppointment}
              </div>
            </div>
            <Link
              className="chat_btn"
              onClick={(e) =>
                !patient.name || !patient.room ? e.preventDefault() : null
              }
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
