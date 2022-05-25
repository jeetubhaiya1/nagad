import React from "react";
import "./LoginPage.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <h2 className="heading">Welcome!</h2>
        <p className="para">
          Nagad is an innovative and promising digital financial service of
          Bangladesh Post Office that embarked upon a glorious journey on March
          26, 2019. After its inception, Nagad has financially included about
          5.5 crore people only
        </p>
      </div>
      <div className="rightContainer">
        <h2 className="sign-in-heading">BO User Sign In</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <label className="label">UserId / Phone Number / Email</label>
            <br></br>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter UserId/ Phone No./ Email"
              className="inputfield"
            />
            <br>
            </br>
            <br></br>
            <label className="label">Password</label>
            <br></br>
            <TextField
              id="outlined-password-input"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              className="inputfield"
            />
          </div>
        </Box>
        <br></br>
        <Button className="loginbutton" variant="contained">Contained</Button>
      </div>
    </div>
  );
};

export default LoginPage;
