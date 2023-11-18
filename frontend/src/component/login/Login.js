import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import L from "../../images/Group.png";
import A from "../../images/a.jpg";
import C from "../../images/c.jpg";
import E from "../../images/ee.jpg";
import M from "../../images/m.jpg";
import P from "../../images/p.jpg";
import T from "../../images/t.jpg";
import PP from "../../images/PP.png";
import UU from "../../images/UU.png";
import RR from "../../images/RR.png";
import TT from "../../images/TT.png";
import SS from "../../images/SS.png";
import topLogo from "../../images/LecemptaNew.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeepLoggedInChange = (e) => {
    setKeepLoggedIn(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/introduction");

    // Add your form submission logic here, e.g., sending data to the server.
    // You can access the email, password, and keepLoggedIn state variables here.
  };

  return (
    <div className="main__whole__login__container">
      <div className="login-container">
        <div className="login-container__topHeading">
          <img src={topLogo} alt="" />
        </div>

        <div className="login-container__text">
          <div className="login-container__text__line"></div>
          <p className="login-container__text__container">Page de connexion</p>
          <div className="login-container__text__line"></div>
        </div>

        <div className="inner__login-container">
          <div className="input-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1957 13.2789H40.3264C41.5057 13.2789 42.4617 14.2349 42.4617 15.4142C42.4617 15.4166 42.4617 15.419 42.4617 15.4214L42.3977 34.594C42.3938 35.7706 41.4389 36.7222 40.2624 36.7222H12.1744C10.9951 36.7222 10.0391 35.7662 10.0391 34.5869C10.0391 34.5861 10.0391 34.5853 10.0391 34.5845L10.0604 15.4119C10.0617 14.2335 11.0173 13.2789 12.1957 13.2789Z"
                stroke="#004AAD"
                stroke-opacity="0.3"
                stroke-width="3.20297"
                stroke-linejoin="round"
              />
              <path
                d="M25.3367 28.9197C26.01 29.4932 27.0208 29.4123 27.5944 28.739C28.1679 28.0657 28.087 27.0549 27.4137 26.4814L25.3367 28.9197ZM11.6676 13.0688C10.9943 12.4953 9.98354 12.5762 9.41 13.2495C8.83647 13.9228 8.91735 14.9336 9.59067 15.5071L11.6676 13.0688ZM43.0844 15.5045C43.7563 14.9293 43.8348 13.9184 43.2596 13.2465C42.6844 12.5746 41.6734 12.4962 41.0015 13.0713L43.0844 15.5045ZM25.3335 26.4839C24.6616 27.0591 24.5832 28.0701 25.1584 28.742C25.7336 29.4139 26.7446 29.4923 27.4165 28.9171L25.3335 26.4839ZM27.4137 26.4814C22.165 22.0105 18.2285 18.6574 15.6041 16.4219C14.292 15.3042 13.3078 14.4659 12.6518 13.9071C12.3237 13.6277 12.0777 13.4181 11.9137 13.2784C11.8317 13.2085 11.7701 13.1561 11.7291 13.1212C11.7086 13.1037 11.6933 13.0906 11.683 13.0819C11.6779 13.0776 11.674 13.0742 11.6715 13.0721C11.6702 13.071 11.6692 13.0701 11.6686 13.0696C11.6684 13.0695 11.6683 13.0694 11.6682 13.0693C11.668 13.0692 11.6679 13.0691 11.6679 13.069C11.6678 13.0689 11.6677 13.0689 11.6677 13.0689C11.6676 13.0688 11.6676 13.0688 10.6292 14.288C9.59067 15.5071 9.59069 15.5071 9.59073 15.5072C9.59077 15.5072 9.59083 15.5072 9.59091 15.5073C9.59139 15.5077 9.591 15.5074 9.59163 15.5079C9.59211 15.5083 9.5934 15.5094 9.59452 15.5104C9.59701 15.5125 9.601 15.5159 9.60605 15.5202C9.61631 15.5289 9.63167 15.542 9.65218 15.5595C9.6932 15.5944 9.75468 15.6468 9.8367 15.7167C10.0007 15.8564 10.2468 16.066 10.5748 16.3454C11.2309 16.9042 12.215 17.7425 13.5272 18.8602C16.1515 21.0957 20.088 24.4488 25.3367 28.9197L27.4137 26.4814ZM42.043 14.2879C41.0015 13.0713 41.0015 13.0714 41.0014 13.0714C41.0014 13.0714 41.0013 13.0715 41.0013 13.0715C41.0011 13.0717 41.0009 13.0719 41.0005 13.0722C40.9999 13.0727 40.999 13.0735 40.9977 13.0746C40.9952 13.0768 40.9912 13.0801 40.9862 13.0844C40.976 13.0931 40.9607 13.1063 40.9403 13.1237C40.8995 13.1587 40.8383 13.211 40.7567 13.2809C40.5935 13.4206 40.3487 13.6302 40.0223 13.9096C39.3694 14.4685 38.3902 15.3068 37.0845 16.4245C34.4732 18.6599 30.5562 22.0131 25.3335 26.4839L27.4165 28.9171C32.6391 24.4463 36.5561 21.0931 39.1674 18.8577C40.4731 17.74 41.4524 16.9017 42.1052 16.3428C42.4316 16.0634 42.6764 15.8538 42.8396 15.7141C42.9212 15.6442 42.9824 15.5919 43.0232 15.5569C43.0436 15.5395 43.0589 15.5264 43.0691 15.5176C43.0743 15.5133 43.078 15.51 43.0806 15.5078C43.0818 15.5068 43.0829 15.5059 43.0835 15.5054C43.0838 15.5051 43.084 15.5049 43.0842 15.5047C43.0843 15.5047 43.0843 15.5046 43.0844 15.5046C43.0844 15.5046 43.0844 15.5045 42.043 14.2879Z"
                fill="#004AAD"
                fill-opacity="0.3"
              />
            </svg>
            <input
              type="email"
              className="input-wrapper__input"
              placeholder="Nicolas@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="input-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1451 21.2428H36.3629C37.5422 21.2428 38.4982 22.1988 38.4982 23.3781V38.3253C38.4982 39.5046 37.5422 40.4606 36.3629 40.4606H17.1451C15.9658 40.4606 15.0098 39.5046 15.0098 38.3253V23.3781C15.0098 22.1988 15.9658 21.2428 17.1451 21.2428Z"
                stroke="#004AAD"
                stroke-opacity="0.3"
                stroke-width="3.20297"
                stroke-linejoin="round"
              />
              <path
                d="M19.9023 21.243V15.8203C19.9023 12.0367 22.9696 8.96948 26.7531 8.96948C30.5367 8.96948 33.604 12.0367 33.604 15.8203V15.8628V15.8628V21.243"
                stroke="#004AAD"
                stroke-opacity="0.3"
                stroke-width="3.20297"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="password"
              className="input-wrapper__input"
              placeholder="********"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="input-wrapper__whole">
            <input
              type="checkbox"
              className="input-wrapper__checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={handleKeepLoggedInChange}
            />
            <div className="keepMeLoggedIn">
              <label htmlFor="keepLoggedIn">Se souvenir de moi</label>
            </div>
          </div>

          <button className="login-button" onClick={handleSubmit}>
            <Link to="/introduction" style={{ textDecoration: "none" }}>
              <span className="login-button__text">
                Se connecter à l’application
              </span>
            </Link>
          </button>
        </div>

        <div className="Linked">
          <Link to="/forgotPassword">
            <div className="Link__forgotPassword">Mot de passe oublié ?</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
