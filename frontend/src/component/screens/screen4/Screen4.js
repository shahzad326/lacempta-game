import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen4.css";
import Image from "../../../images/performaGame.png";
import Logo from '../../../images/LecemptaNew.jpeg'

const Screen4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Use a timeout to wait for 10 seconds and then redirect to screen5
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Clean up the timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="Screen4__mainContainer">
      <div className="screen4__imageContainer">
        <img src={Image} alt="" />
      </div>

      <div className="screen4__box__Container mt-10">
        <div className="rotating-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#12C2E9" />
            <circle cx="60" cy="15" r="15" fill="#C471ED" />
            <circle cx="105" cy="15" r="15" fill="#F64F59" />
          </svg>
        </div>
      </div>

      <div className="screen4__text mt-10">Veuillez patienter</div>

      <div className="screen4__botton">
        <div className="screen4__topHeading">
          <img src={Logo} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
