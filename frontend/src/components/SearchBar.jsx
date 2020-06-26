import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PatientsContext from "../contexts/patients-context";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./styles/PatientCard.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const { patients, setPatients, title } = useContext(PatientsContext);
  const [filtered, setFilter] = useState([]);

  const searchPatients = ({ needle }) => {
    setFilter(
      patients.filter((patient) => {
        console.log(">>>" + patient.lastname + "<<<" + patient.id);
        return patient.lastname.includes(needle);
      })
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            searchPatients(e.target.value);
          }}
        />
        <ul>
          {filtered.map((patient) => {
            return <li>{patient}</li>;
          })}
        </ul>
      </div>
      <div className={classes.grow}>
        {/* <AppBar position="static"> */}
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search patients"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
        {/* </AppBar> */}
      </div>
    </>
  );
};
export default SearchBar;
