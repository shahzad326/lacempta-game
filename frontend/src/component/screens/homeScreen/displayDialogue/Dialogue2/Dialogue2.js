import React from "react";
import "./Dialogue2.css";
import cross from "../../../../../images/iconparksolidcloseone.png";
import containe from "../../../../../images/07e4d8d20b62a3412cfd392a75e9359b.gif";
const Dialogue2 = () => {
  return (
    <div className="Whole__MainDialogue">
      <div className="dialogue__topBar">
        <div className="topbar__InnerContainer">
          <img src={cross} className="Dialogue__CrossIcon" alt="" />
        </div>
      </div>

      <div className="Dialogue__CenterContainer">
        <div className="mainTopCenterContainer">
          <div className="Dialogue2CneterContainer">
            <img src={containe} className="dialogue__upload" alt="" />
          </div>
        </div>

        <div className="dialogue__TopHeading">
          <h1 className="dialogue__TopHeadingTExt">Clôture</h1>
        </div>

        <div className="dialogue__three__button">
          <div className="dialogue__button__First">
            <div className="dialogue__firstButtonText">Balance</div>
          </div>

          <div className="dialogue__button__Second">
            <div className="dialogue__firstButtonText">Journaux</div>
          </div>

          <div className="dialogue__button__Third">
            <div className="dialogue__firstButtonText">Grand Livre</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogue2;
