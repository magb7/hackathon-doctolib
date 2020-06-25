import React, { useContext } from 'react';
import './styles/PatientModal.css';
import PatientsContext from '../contexts/patients-context';

const PatientModal = () => {
  const { patients, setPatients } = useContext(PatientsContext);
  return (
    <>
      {patients.map((patient, index) => {
        return (
          <div className="modal" key={index}>
            {/* <a className="close" onClick={close}>
              &times;
            </a> */}
            <div className="header">PATIENT INFORMATION</div>
            <div className="content">
              {' '}
              <ul>
                <li>Firstname : {patient.firstname}</li>
                <li>Lastname : {patient.lastname}</li>
                <li>Mail : {patient.mail}</li>
                <li>Phone : {patient.phone}</li>
                <li>Last appointment : {patient.appointment}</li>
              </ul>
            </div>
            <button>MODIFIER</button>
          </div>
        );
      })}
    </>
  );
};
export default PatientModal;
