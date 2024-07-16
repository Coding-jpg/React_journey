import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

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
      <div className="logo-center">Logo</div>
      <li className="notification">
        Register for free to experience all features !
      </li>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
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
              variant="contained"
              color="primary"
              onClick={handleGetVerificationCode}
              fullWidth
            >
              Get Code
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Login;
