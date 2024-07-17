import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import "./PagesConfig.css";
import logoImg from "../assets/logo.png";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(e.target.value);
  };

  const handleGetVerificationCode = () => {
    console.log("Getting verification code for:", phoneNumber);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Phone Number:", phoneNumber);
    console.log("Submitted Verification Code:", verificationCode);
  };
  return (
    <div className="login-container">
      <img className="logo-center" src={logoImg}></img>
      <li className="notification">
        Register for free to experience all features !
      </li>
      <form className="form-container" onSubmit={handleSubmit}>
        <Grid container spacing={2} className="grid-container">
          <Grid item xs={12}>
            <TextField
              fullWidth
              className="input-field"
              id="phoneNumber"
              label="Phone Number"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              className="input-field"
              id="verificationCode"
              label="Verification Code"
              type="text"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              className="btn-verification"
              variant="contained"
              color="primary"
              onClick={handleGetVerificationCode}
              fullWidth
            >
              Get Code
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              className="btn-login"
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Login;
