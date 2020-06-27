import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PatientsContext from "../contexts/patients-context";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textTransform: "none",
    fontWeight: "normal",
  },
  paper: {
    backgroundColor: "white",
  },
  modalButton: {
    cursor: "pointer",
    float: "left",
    border: "1px solid #5594db",
    width: "100%",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "rgb(239, 242, 246)",
    color: "#5594db",
    fontSize: "14px",
  },

  content: {
    padding: "0",
    fontSize: "0.9rem",
  },
  header: {
    width: "100%",
    fontFamily: "'lato', sans-serif",
    fontSize: "1em",
    textAlign: "center",
    letterSpacing: "2px",
    padding: "5px",
    color: "#5594db",
  },
}));
export default function ScrollDialog({ name }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const { patients } = useContext(PatientsContext);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <SettingsIcon type="button" onClick={handleClickOpen("paper")} />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <div className={classes.paper}>
            <div className={classes.header}>PATIENT INFORMATION</div>
          </div>
        </DialogTitle>
        <DialogContent dividers name={name}>
          <div className="content">
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
        </DialogContent>
        <DialogActions>
          <a href="https://www.doctolib.fr/">
            <Button>Doctolib</Button>
          </a>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
