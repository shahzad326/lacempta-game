import React, { useState, useEffect } from "react";
import "./Screen7.css";
import image from "../../../images/4106811735a08bd37cd08c6a47d85c2c.gif";
import cross from "../../../images/cross.png";
import { useNavigate } from "react-router-dom";

const Screen7 = () => {
  const [showVideo, setShowVideo] = useState(true);
  const navigate = useNavigate();

  const toggleVideoDisplay = () => {
    setShowVideo(!showVideo);
  };

  useEffect(() => {
    // Set a timeout to redirect after 25 seconds
    const timeoutId = setTimeout(() => {
      navigate("/loading"); // Redirect to screen5
    }, 5000);

    // Clean up the timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="main__whole__login__container">
      <div className="Screen7__mainContainer">
        <div className="screen7__upperContainer">
          <div className="cross__icon" onClick={toggleVideoDisplay}>
            <img src={cross} className="Cross-Icon" alt="Cross" />
          </div>

          <div className="screen3__innerContainer__image">
            <iframe
              title="YouTube Video"
              className="screen3__innerContainer"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZPhlSqHN4yg"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen7;
