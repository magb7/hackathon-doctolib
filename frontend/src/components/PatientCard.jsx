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
                  {patient.lastname} {patient.firstname}
                </p>
              </div>
              <div className="card_icons">
                {patient.atRisk ? (
                  <img src="/icons/bookmark_orange.png" alt="bookmark" />
                ) : null}
                <img src="/icons/more.png" alt="more options" />
              </div>
            </div>
            <div className="card_info">
              <div className="card_mail">
                Information contact : {patient.email}
              </div>
              <div className="card_maj">
                Données mises à jour le {patient.lastAppointment}
              </div>
            </div>
            <div className="chat_btn">
              <button>test</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PatientCard;
