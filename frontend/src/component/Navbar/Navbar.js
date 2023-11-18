import React, { useState, useCallback } from "react";
import "./Navbar.css";
import topContainer from "../../images/group-71.svg";
import Pendil from "../../images/pencil-1.svg";
import Documents from "../../images/documentsigned-1.svg";
import Setting from "../../images/settings-1.svg";
import PortalPopup from "../../components/portal-popup";
import ReglesDeJeu from "../../components/ReglesDeJeu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isReglesDeJeu, setIsReglesDeJeu] = useState(false);

  const openReglesDeJeu = useCallback(() => {
    setIsReglesDeJeu(true);
  }, []);

  const closeReglesDeJeu = useCallback(() => {
    setIsReglesDeJeu(false);
  }, []);
  const PriseDeNote = useCallback(() => {
    navigate("/prise-de-note");
  }, []);

  return (
    <div>
      <div className="Navbar__pageDaccuel_container">
        <div className="Navbar__pageDaccuel-InnerContainer">
          <Link to="/">
            <img
              className="pageDaccuel-TopImage__container"
              alt=""
              src={topContainer}
            />
          </Link>
          <div className="pageDaccuel-frame-wrapper">
            <div className="pageDaccuel-frame-group">
              <div className="pageDaccuel-frame-container__container">
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
              <div className="pageDaccuel-frame-div__container">
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
                <div className="pageDaccuel-frame-wrapper1__container">
                  <div className="pageDaccuel-pencil-1-parent">
                    <img alt="" src={Setting} />
                    <div className="pageDaccuel-prise-de-note">Paramètres</div>
                  </div>
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

export default Navbar;
