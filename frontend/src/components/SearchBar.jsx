import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";
import Patients from "../../src/Patients";

// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto",
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex",
//     },
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       display: "none",
//     },
//   },
// }));

export default function SearchBar() {
  //   const classes = useStyles();

  const [filtered, setFiltered] = useState([]);

  const searchPatients = ({ needle }) => {
    setFiltered(
      Patients.filter((patient) => {
        return patient.toLowerCase().includes(needle.toLowerCase());
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          searchPatients(e.target.value);
        }}
      />
      <ul>
        {filtered.map((patient, i) => {
          return <li key={i}>{patient}</li>;
        })}
      </ul>
    </div>
    // <div className={classes.grow}>
    //   {/* <AppBar position="static"> */}
    //   <Toolbar>
    //     <div className={classes.search}>
    //       <div className={classes.searchIcon}>
    //         <SearchIcon />
    //       </div>
    //       <InputBase
    //         onChange={(e) => {
    //           searchPatients(e.target.value);
    //         }}
    //         placeholder="Search patients"
    //         classes={{
    //           root: classes.inputRoot,
    //           input: classes.inputInput,
    //         }}
    //         inputProps={{ "aria-label": "search" }}
    //       />
    //       <ul>
    //         {filtered.map((patient) => {
    //           return <li>{patient}</li>;
    //         })}
    //       </ul>
    //     </div>
    //     <div className={classes.grow} />
    //   </Toolbar>
    //   {/* </AppBar> */}
    // </div>
  );
}
