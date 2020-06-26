import React, { useContext } from 'react';
import './styles/PatientModal.css';
//import PatientsContext from '../contexts/patients-context';

const PatientModal = ({ close }) => {
  //const { patients, setPatients } = useContext(PatientsContext);
  return (
    <>
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header">PATIENT INFORMATION</div>
        <div className="content">
          {' '}
          <ul>
            <li>Firstname : </li>
            <li>Lastname : </li>
            <li>Mail : </li>
            <li>Phone : </li>
            <li>Last appointment : </li>
          </ul>
        </div>
        <div>
          {' '}
          <button>Modifier</button>
          <button>Accéder à Doctolib</button>
        </div>
      </div>
    </>
  );
};
export default PatientModal;
