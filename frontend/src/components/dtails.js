import { useState, useCallback } from "react";

import "./dtails.css";
import information from "../images/information-11@2x.png";

const Dtails = () => {
  return (
    <>
      <div className="Popup__dtails">
        <img className="Popup__information-1-icon1" alt="" src={information} />
        <div className="Popup__en-cliquant-sur">
          En cliquant sur cette icône n’importe où dans l’application, vous
          pourrez accéder à des informations / aides précises
        </div>
      </div>
    </>
  );
};

export default Dtails;
