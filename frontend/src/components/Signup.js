import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  signupform: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-arround",
  },
  title: {
    textAlign: "center",
    color: "#E5A33F",
    fontFamily: '"MuseoModerno", cursive',
    margin: "25px",
  },
  input: {
    marginBottom: "25px",
    textAlign: "center",
  },
  root: {
    backgroundColor: "#E5A33F",
    color: "white",
    "&:hover": {
      background: "#68b7dd",
    },
  },

  buttons: {
    alignSelf: "center",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.signupform}>
      <h3 className={classes.title}>Sign Up</h3>
      <div className={classes.input}>
        <TextField label="Name" name="name" variant="outlined" />
      </div>
      <br />
      <div className={classes.input}>
        <TextField label="UserName" name="username" variant="outlined" />
      </div>
      <br />
      <div className={classes.input}>
        <TextField type="email" label="Email" name="email" variant="outlined" />
      </div>
      <br />
      <div className={classes.input}>
        <TextField
          type="password"
          label="Password"
          name="password"
          variant="outlined"
        />
      </div>
      <br />{" "}
      <div className={classes.buttons}>
        <Link exact to="/practician">
          <Button className={classes.root} variant="contained">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
