import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks.ts";
import "./LoginPage.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Label from "../Label/Label.tsx";
import TextField from "../TextField/TextField.tsx";
import { login } from "../../redux/reducers/authReducer.ts";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    dispatch(login());
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="leftContainer">
        <h2 className="heading">Welcome!</h2>
        <p className="para">
          Nagad is an innovative and promising digital financial service of
          Bangladesh Post Office that embarked upon a glorious journey on March
          26, 2019. After its inception, Nagad has financially included about
          5.5 crore people only.
        </p>
      </div>
      <div className="rightContainer">
        <h2 className="sign-in-heading">BO User Sign In</h2>
        <Box
          className="form"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Label
            className="label"
            htmlFor="userId"
            fieldName="UserId / Phone Number / Email"
          />
          <TextField
            type="string"
            id="userId"
            placeholder="Enter UserId/ Phone No./ Email"
            name="userId"
            required={true}
          />

          <Label id="password" fieldName="Password" />
          <TextField
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required={true}
          />
          <Button
            className="loginbutton"
            variant="contained"
            onClick={loginHandler}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
