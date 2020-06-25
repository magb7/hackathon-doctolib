import React from 'react';
import './styles/PatientModal.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header">PATIENT INFORMATION</div>
    <div className="content">
      {' '}
      <p>Firstname :</p>
      <p>Lastname :</p>
      <p>Mail :</p>
      <p>Last appointment :</p>
      <p>Other :</p>
    </div>
    <button>MODIFIER</button>
  </div>
);
