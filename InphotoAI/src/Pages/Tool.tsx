import "./PagesConfig.css";
import { IconButton, Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import logoImg from "../assets/logo.png";

function Tool() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setUploadedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="tool-container">
      <ul className="heading-line-tool">
        <img className="logo-left-tool" src={logoImg}></img>
        <li className="icon">
          <IconButton className="user-icon">
            <AccountCircleIcon />
          </IconButton>
        </li>
      </ul>
      <div className="shadow-box"></div>
      <Box className="upload-box" component="label" htmlFor="upload-input">
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <div className="notification-upload">
            <CloudUploadIcon
              sx={{ justifyContent: "center" }}
            ></CloudUploadIcon>
            <Typography variant="body1" color="textSecondary">
              Click or Drag & Drop to Upload
            </Typography>
          </div>
        )}
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </Box>
      <TextField
        className="post-textfield"
        id="outlined-basic"
        label="Your Post"
        variant="outlined"
      />
      <Button className="btn-apply" variant="contained">
        Apply
      </Button>
    </div>
  );
}

export default Tool;
