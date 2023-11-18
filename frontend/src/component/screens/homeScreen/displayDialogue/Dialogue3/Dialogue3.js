import React from "react";
import "./Dialogue3.css";
import cross from "../../../../../images/iconparksolidcloseone.png";
import containe from "../../../../../images/f2c9bafeeec8b4f8f6e2df40be27d344.gif";
const Dialogue3 = ({ children, onClose }) => {
  return (
    <div className="AllMainContainer">
      <div className="MainDialogueContainer ">
        <div className="MainTopbar__dialogue3 ">
          <div className="topbar3__InnerContainer">
            <p className="innerText__Dialogue3">Consultation d’un compte</p>
            <img
              src={cross}
              onClick={onClose}
              className="Dialogue3__CrossIcon "
              alt=""
            />
          </div>
        </div>

        <div className="Dialogue3__NewCenterContainer">
          <div className="mainTopCenterContainer">
            <div className="Dialogue2__CneterContainer">
              <img src={containe} className="dialogue__upload" alt="" />
            </div>
          </div>

          <div className="dialogue__TopHeading">
            <h1 className="dialogue__TopHeadingTExt">Saisie</h1>
          </div>

          <div className="dialogue__InnerText">
            <p className="Dialogue3__text">
              Lorem ipsum dolor sit amet consectetur. Euismod ante in tincidunt
              dolor diam nulla in venenatis habitasse. Placerat dignissim lacus
              et sit placerat nam. Turpis integer eu tortor duis.
            </p>
          </div>

          <div className="dialogue__three__button">
            <div className="dialogue__button__First">
              <div className="dialogue__firstButtonText">
                Saisir une écriture
              </div>
            </div>

            <div className="dialogue__button__Second">
              <div className="dialogue__firstButtonText">
                Rechercher une écriture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogue3;
