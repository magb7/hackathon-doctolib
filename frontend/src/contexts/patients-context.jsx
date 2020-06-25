import { createContext } from "react";

const PatientsContext = createContext({
  patients: [
    {
      id: 1,
      firstname: "Kelvin",
      lastname: "Samson",
      email: "Melvin@sample.com",
      phone: "0615487985",
      lastAppointment: "20-05-2020",
      atRisk: true,
      name: "DRCarlton",
      room: "Kelvin-Samson",
    },
    {
      id: 2,
      firstname: "Annabel",
      lastname: "Stone",
      email: "Annabel@sample.com",
      phone: "0615487987",
      lastAppointment: "22-05-2020",
      atRisk: true,
      name: "DRCarlton",
      room: "Annabel-Stone",
    },
    {
      id: 3,
      firstname: "Grace",
      lastname: "Loveday",
      email: "Grace@sample.com",
      phone: "0615487147",
      lastAppointment: "24-05-2020",
      atRisk: false,
      name: "DRCarlton",
      room: "Grace-Loveday",
    },
    {
      id: 4,
      firstname: "Angela",
      lastname: "Gonzales",
      email: "Angela@sample.com",
      phone: "0615487963",
      lastAppointment: "20-06-2020",
      atRisk: true,
      name: "DRCarlton",
      room: "Angela-Gonzales",
    },
    {
      id: 5,
      firstname: "Paulo",
      lastname: "Avent",
      email: "Paulo@sample.com",
      phone: "0615487851",
      lastAppointment: "27-06-2020",
      atRisk: false,
      name: "DRCarlton",
      room: "Paulo-Avent",
    },
  ],
  setPatients: () => {},
});

export default PatientsContext;
