import React from 'react';
import './styles/PatientCard.css';
import Patients from './../Patients';

const PatientCard = () => {
  return (
    <>
      {Patients.map((patient) => {
        return (
          <div className="patientCard">
            <p className="card-title">
              {patient.firstname}
              {patient.lastname}
            </p>
            <div className="mail">Information contact : {patient.email}</div>
            <div className="maj">
              Données mises à jour le {patient.lastAppointment}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PatientCard;
