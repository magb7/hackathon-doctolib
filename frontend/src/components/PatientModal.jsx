import React, { useContext } from 'react';
import './styles/PatientModal.css';
import PatientsContext from '../contexts/patients-context';

const test = ({ close }) => {
  const { patients, setPatients } = useContext(PatientsContext);
  return (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
      </a>
      <div className="header">PATIENT INFORMATION</div>
      <div className="content">
        {' '}
        <ul>
          <li>Firstname :</li>
          <li>Lastname :</li>
          <li>Mail :</li>
          <li>Phone :</li>
          <li>Last appointment :</li>
        </ul>
      </div>
      <button>MODIFIER</button>
    </div>
  );
};
export default test;
