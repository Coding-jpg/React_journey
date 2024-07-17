import "./PagesConfig.css";
import { IconButton, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logoImg from "../assets/logo.png";

function Landing() {
  return (
    <div className="landing-container">
      <ul className="heading-line">
        <img className="logo-left" src={logoImg}></img>
        <li className="icon">
          <IconButton className="user-icon">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </li>
      </ul>
      <div className="shadow-box"></div>
      <h1 className="title">InphotoAI</h1>
      <li className="slogan">
        Write your post, upload the image, and let us match the emotion.
      </li>
      <Button className="btn-landing" variant="contained">
        Create
      </Button>
    </div>
  );
}

export default Landing;
