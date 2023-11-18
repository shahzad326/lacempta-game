import React from "react";
import "./Dialogue4.css";
import cross from "../../../../../images/iconparksolidcloseone.png";
import containe from "../../../../../images/e8e1f7ef3cabf19415f099b3b8e107ae.gif";
const Dialogue4 = () => {
  return (
    <div className="Whole__MainDialogue">
      <div className="dialogue3__topBar">
        <div className="topbar3__InnerContainer">
          <p className="innerText__Dialogue3">Etats</p>
          <img src={cross} className="Dialogue3__CrossIcon" alt="" />
        </div>
      </div>

      <div className="Dialogue__CenterContainer">
        <div className="mainTopCenterContainer">
          <div className="Dialogue2CneterContainer">
            <img src={containe} className="dialogue__upload" alt="" />
          </div>
        </div>

        <div className="dialogue__TopHeading">
          <h1 className="dialogue__TopHeadingTExt">Etats</h1>
        </div>

        <div className="dialogue__InnerText">
          <p className="Dialogue__text">
            Lorem ipsum dolor sit amet consectetur. Euismod ante in tincidunt
            dolor diam nulla in venenatis habitasse. Placerat dignissim lacus et
            sit placerat nam. Turpis integer eu tortor duis.
          </p>
        </div>

        <div className="dialogue__three__button">
          <div className="dialogue__button__First">
            <div className="dialogue__firstButtonText">Compte de résultat</div>
          </div>

          <div className="dialogue__button__Second">
            <div className="dialogue__firstButtonText">Bilan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogue4;
