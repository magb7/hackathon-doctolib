import React from 'react';
import './styles/PatientCard.css';
import Patients from './../Patients';

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
            <div className="chat_btn">
              <button>Start a conversation</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PatientCard;
