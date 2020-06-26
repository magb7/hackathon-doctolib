import React, { useContext } from "react";
import "./styles/PatientModal.css";
import PatientsContext from "../contexts/patients-context";

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
          {" "}
          <div>
            {patients
              .filter((patient) => patient.firstname === name)
              .map((filteredPatient) =>
                console.log(filteredPatient)(
                  <ul>
                    <li>Firstname : {filteredPatient.firstname}</li>
                    <li>Lastname : {filteredPatient.lastname}</li>
                    <li>Mail : {filteredPatient.email}</li>
                    <li>Phone : {filteredPatient.phone}</li>
                    <li>
                      Last appointment : {filteredPatient.lastAppointment}
                    </li>
                  </ul>
                )
              )}
          </div>
        </div>

        <div>
          {" "}
          <button>Accéder à Doctolib</button>
        </div>
      </div>
    </>
  );
};
export default PatientModal;
