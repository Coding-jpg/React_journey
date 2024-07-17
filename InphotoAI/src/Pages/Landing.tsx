import "./PagesConfig.css";
import { IconButton, Button, Box, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logoImg from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "/images_carousel/result_img_2.jpg",
  "/images_carousel/result_test_img_2.jpg",
];

const promptCarousel =
  "Check out this stunning view! The AI perfectly captured the essence of my words in this breathtaking scene. 🌄✨ #CanyonVibes #AIArt #NatureMagic";

function Landing() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images carsousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate("/Login");
  };

  return (
    <div className="landing-container">
      <ul className="heading-line">
        <img className="logo-left" src={logoImg}></img>
        <li className="icon">
          <IconButton className="user-icon" onClick={handleClick}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </li>
      </ul>
      <div className="shadow-box"></div>
      <h1 className="title">InphotoAI</h1>
      <li className="slogan">
        Write your post, upload the image, and let us match the emotion.
      </li>
      <TextField
        value={promptCarousel}
        InputProps={{ readOnly: true }}
        variant="outlined"
        label=""
        sx={{
          width: "300px",
        }}
      ></TextField>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "400px",
          height: "200px",
          top: "0px",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          sx={{
            width: "100%",
            height: "100%",
            transition: "transform 0.5s ease-in-out",
          }}
        />
      </Box>
      <Button className="btn-landing" variant="contained" onClick={handleClick}>
        Create
      </Button>
    </div>
  );
}

export default Landing;
