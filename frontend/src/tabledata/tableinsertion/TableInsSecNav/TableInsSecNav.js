import React, { useState, useRef } from "react";
import "./TableInsSecNav.css";
import whatsapp from "../../../images/valide 1.png";

const TableInsSecNav = () => {
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
        <div className="TableIns__MidleNav__firstContainer">
          <div className="TableIns__MidNav__text">Début Période</div>
        </div>

        <div className="TableIns__MidleNav__SecondContainer">
          <div className="TableIns__MidNav__text">Fin Période</div>
        </div>

        <div className="TableIns__MidleNav__ThirdContainer">
          <div className="TableIns__MidNav__text">Journaux</div>
        </div>

        <div className="TableIns__MidleNav__FourthContainer">
          <div className="TableIns__MidNav__text">Montant Mini</div>
        </div>

        <div className="TableIns__MidleNav__FifthContainer">
          <div className="TableIns__MidNav__text">Montant Maxi</div>
        </div>

        <div className="TableIns__MidleNav__SixthContainer">
          <div className="TableIns__MidNav__text">Libellé Ecriture</div>
        </div>

        <div className="TableIns__MidleNav__SevenContainer">
          <div className="TableIns__MidNav__text">Numéro pièce</div>
        </div>

        <div className="TableIns__MidleNav__EightContainer">
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TableInsSecNav;
