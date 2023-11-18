import React from "react";
import cross from "../../../../../images/iconparksolidcloseone.png";
import containe from "../../../../../images/f2c9bafeeec8b4f8f6e2df40be27d344.gif";

const Dialogue5 = () => {
  return (
    <div>
      <div className="MainDialogueContainer">
        <div className="Dialogue5__InnerContainer">
          <img src={containe} alt="" />

          <div className="Dialogue5__TextContaienr">
            <span className="Dialogue5__TextWritten">
              Lorem ipsum dolor sit amet consectetur. Euismod ante in tincidunt
              dolor diam nulla in venenatis habitasse. Placerat dignissim lacus
              et sit placerat nam. Turpis integer eu tortor duis.
            </span>
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

export default Dialogue5;
