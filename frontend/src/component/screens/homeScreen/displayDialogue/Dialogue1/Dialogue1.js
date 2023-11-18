import React from "react";
import "./Dialogue1.css";
import cross from "../../../../../images/iconparksolidcloseone.png";
const Dialogue1 = () => {
  return (
    <div className="Whole__MainDialogue">
      <div className="dialogue__topBar">
        <div className="topbar__InnerContainer">
          <img src={cross} className="Dialogue__CrossIcon" alt="" />
        </div>
      </div>

      <div className="Dialogue__CenterContainer">
        <div className="mainTopCenterContainer">
          <div className="DialogueCneterContainer"></div>
        </div>

        <div className="dialogue__TopHeading">
          <h1 className="dialogue__TopHeadingTExt">Comptes</h1>
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
            <div className="dialogue__firstButtonText">Consultation</div>
          </div>

          <div className="dialogue__button__Second">
            <div className="dialogue__firstButtonText">Lettrage</div>
          </div>

          <div className="dialogue__button__Third">
            <div className="dialogue__firstButtonText">Plan Comptable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogue1;
