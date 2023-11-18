import React, { useState, useCallback } from "react";
import "./NavbarHome.css";
import topContainer from "../../../images/group-71.svg";
import Pendil from "../../../images/pencil-1.svg";
import Documents from "../../../images/documentsigned-1.svg";
import Setting from "../../../images/settings-1.svg";
import PortalPopup from "../../../components/portal-popup";
import ReglesDeJeu from "../../../components/ReglesDeJeu";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  const [isReglesDeJeu, setIsReglesDeJeu] = useState(false);

  const openReglesDeJeu = useCallback(() => {
    setIsReglesDeJeu(true);
  }, []);

  const closeReglesDeJeu = useCallback(() => {
    setIsReglesDeJeu(false);
  }, []);
  const PriseDeNote = useCallback(() => {}, []);

  return (
    <div>
      <div className="Navbar__pageDaccuel_container">
        <div className="NavbarHOME__pageDaccuel-InnerContainer">
          <Link to="/">
            <img className="pageDaccuel-TopImage" alt="" src={topContainer} />
          </Link>
          <div className="pageDaccuel-frame-wrapper">
            <div className="pageDaccuel-frame-group">
              <Link to="/prise-de-note">
                <div className="pageDaccuel-frame-container__NavbarHome">
                  <div className="pageDaccuel-pencil-1-parent">
                    <img
                      className="pageDaccuel-pencil-1-icon"
                      alt=""
                      src={Pendil}
                    />
                    <div
                      className="pageDaccuel-prise-de-note"
                      onClick={PriseDeNote}
                    >
                      Prise de note
                    </div>
                  </div>
                </div>
              </Link>
              <div className="pageDaccuel-frame-div__NavbarHome">
                <div className="pageDaccuel-pencil-1-parent">
                  <img
                    className="pageDaccuel-pencil-1-icon"
                    alt=""
                    src={Documents}
                  />
                  <div
                    className="pageDaccuel-prise-de-note"
                    onClick={openReglesDeJeu}
                  >
                    Règles du jeu
                  </div>
                </div>
              </div>
              <Link to="/paramètres">
                <div className="pageDaccuel-frame-wrapper1__NavbarHome">
                  <div className="pageDaccuel-pencil-1-parent">
                    <img alt="" src={Setting} />
                    <div className="pageDaccuel-prise-de-note">Paramètres</div>
                  </div>
                </div>
              </Link>
              <Link to="/">
                <div className="pageDaccuel-pencil-1-parent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    className="NavbarHome__TopSvg"
                  >
                    <path
                      d="M24.9108 14.7307C24.8148 14.7313 24.7196 14.7129 24.6307 14.6766C24.5419 14.6403 24.461 14.5868 24.3929 14.5192L13.9697 4.08879L3.54662 14.5192C3.40708 14.6387 3.22759 14.7011 3.04402 14.6941C2.86045 14.687 2.68631 14.6109 2.55641 14.481C2.42651 14.3511 2.35041 14.1769 2.34332 13.9934C2.33623 13.8098 2.39867 13.6303 2.51816 13.4908L13.4592 2.54975C13.5958 2.4139 13.7807 2.33765 13.9734 2.33765C14.1661 2.33765 14.351 2.4139 14.4876 2.54975L25.4286 13.4908C25.529 13.5932 25.597 13.7229 25.624 13.8637C25.6511 14.0045 25.6361 14.1501 25.5808 14.2824C25.5255 14.4148 25.4325 14.5278 25.3133 14.6076C25.1942 14.6873 25.0541 14.7301 24.9108 14.7307Z"
                      fill="#3F3F41"
                    />
                    <path
                      d="M13.9706 6.55371L5.21777 15.3357V24.2125C5.21777 24.5994 5.37147 24.9704 5.64505 25.244C5.91862 25.5176 6.28968 25.6713 6.67657 25.6713H11.7824V18.3773H16.1588V25.6713H21.2646C21.6515 25.6713 22.0225 25.5176 22.2961 25.244C22.5697 24.9704 22.7234 24.5994 22.7234 24.2125V15.2846L13.9706 6.55371Z"
                      fill="#3F3F41"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isReglesDeJeu && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReglesDeJeu}
        >
          <ReglesDeJeu onClose={closeReglesDeJeu} />
        </PortalPopup>
      )}
    </div>
  );
};

export default NavbarHome;
