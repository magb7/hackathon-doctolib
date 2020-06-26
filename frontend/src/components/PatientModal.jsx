import React, { useContext } from 'react';
import './styles/PatientModal.css';
import PatientsContext from '../contexts/patients-context';

const PatientModal = ({ close, name }) => {
  const { patients } = useContext(PatientsContext);

  return (
    <>
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header">PATIENT INFORMATION</div>
        <div className="content">
          {' '}
          <div>
            {patients
              .filter((patient) => patient.lastname === name)
              .map((filteredPatient) => (
                <ul>
                  <li>Firstname : {filteredPatient.firstname}</li>
                  <li>Lastname : {filteredPatient.lastname}</li>
                  <li>Mail : {filteredPatient.email}</li>
                  <li>Phone : {filteredPatient.phone}</li>
                  <li>Last appointment : {filteredPatient.lastAppointment}</li>
                </ul>
              ))}
          </div>
        </div>

        <div>
          {' '}
          <form action="https://www.doctolib.fr/" method="get" target="_blank">
            <button type="submit">Accéder à Doctolib</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default PatientModal;
