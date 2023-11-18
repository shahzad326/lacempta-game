import React, { useState, useRef } from "react";
import "./SecondNavbar.css";
import Navbar from "../../../Navbar/Navbar";

const SecondNavbar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const libelleRef = useRef(null);
  const numeroPieceRef = useRef(null);

  const handleLibelleClick = () => {
    libelleRef.current.textContent = "";
    libelleRef.current.focus();
  };

  const handleNumeroPieceClick = () => {
    numeroPieceRef.current.textContent = "";
    numeroPieceRef.current.focus();
  };

  return (
    <div>
      <div className="SecondNav__ThirdNavbar">
        <div className="SecondNav__ThirdNavbar__FirstContainer">
          <div className="ThirdNavbar__text">Date</div>
        </div>

        <div className="SecondNav__ThirdNavbar__SecondContainer">
          <div
            className="ThirdNavbar__text editable-text"
            onClick={handleLibelleClick}
            ref={libelleRef}
            contentEditable={true}
          >
            <div className="scrollable-content">Libellé de l’écriture</div>
          </div>
        </div>

        <div className="ThirdNavbar__ThirdContainer">
          <div
            className="ThirdNavbar__text editable-text"
            onClick={handleNumeroPieceClick}
            ref={numeroPieceRef}
            contentEditable={true}
          >
            <div className="scrollable-content">Numéro de Pièce</div>
          </div>
        </div>

        <div className="ThirdNavbar__FourthContainer">
          <div className="ThirdNavbar__text">Journal</div>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
