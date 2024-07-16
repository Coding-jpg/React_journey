import "./PagesConfig.css";
import { IconButton, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Landing() {
  return (
    <div className="landing-container">
      <div className="logo-left">Logo</div>
      <IconButton className="User">
        <AccountCircleIcon />
      </IconButton>
      <h1 className="title">InphotoAI</h1>
      <li className="slogan">
        Instant AI Photo Magic: Automatically Match Your Images and Social Media
        Post for Perfect Mood Coordination!
      </li>
      <Button className="btn-landing" variant="contained">
        Create
      </Button>
    </div>
  );
}

export default Landing;
