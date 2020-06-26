import React, { useState } from "react";
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
    color: "white",
    fontFamily: '"MuseoModerno", cursive',
    margin: "25px",
  },
  input: {
    marginBottom: "25px",
    textAlign: "center",
  },
  root: {
    backgroundColor: "white",
    color: "grey",
    borderRadius: "3px",
  },
  login: {
    backgroundColor: "#E5A33F",
    color: "white",
    "&:hover": {
      background: "#68b7dd",
    },
  },
  register: {
    color: "white",
  },
}));
const LoginForm = () => {
  const classes = useStyles();

  return (
    <div>
      <form>
        <div>
          <h3 className={classes.title}> or Sign in</h3>
        </div>
        <div>
          <TextField
            className={classes.root}
            label="Name"
            name="username"
            variant="outlined"
          />
        </div>
        <br />
        <div>
          <TextField
            className={classes.root}
            type="password"
            label="Password"
            name="password"
            variant="outlined"
          />
        </div>
        <br />
        <div>
          <Link exact to="/practician">
            <Button
              className={classes.login}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Link>
          <Link exact to="/register">
            <Button className={classes.register} color="primary">
              Register
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
