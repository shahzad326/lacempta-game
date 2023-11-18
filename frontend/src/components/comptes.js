import { useCallback } from "react";
import "./comptes.css";
import crossIcon from "../images/corssIcon.png";
import icon from "../images/book 1.jpg";

const Comptes = ({ onClose }) => {
  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Plan Comptable" to the project
  }, []);

  return (
    <div className="Popup-Inner__etats">
      <div className="Popup-Inner__Comptes-etats-inner">
        <div className="Popup-Inner__Comptes-etats-group">
          <span className="etats2"></span>
          <img
            className="icon-park-solidclose-one1"
            alt=""
            onClick={onClose}
            src={crossIcon}
          />
        </div>
      </div>

      <div className="v3btlkprm-1-parent__Compte">
        <img className="v3btlkprm-1-icon__Compte" alt="" src={icon} />
        <div className="frame-parent4">
          <div className="etats-parent">
            <div className="etats1">Comptes</div>
            <div className="lorem-ipsum-dolor"></div>
          </div>
          <div className="frame-wrapper8">
            <div className="group-container">
              <div
                className="rectangle-parent"
                onClick={onFrameContainer3Click}
              >
                <div className="PopupSecond__Compte__group-item">
                  <span className="compte-de-rsultat1">Consultation</span>
                </div>
              </div>

              <div
                className="rectangle-parent"
                onClick={onFrameContainer3Click}
              >
                <div className="PopupSecond__Compte__group-second-item">
                  <span className="compte-de-rsultat1">Lettrage</span>
                </div>
              </div>

              <div
                className="rectangle-parent"
                onClick={onFrameContainer3Click}
              >
                <div className="PopupSecond__Compte__group-Third-item">
                  <span className="compte-de-rsultat1">Plan Comptable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comptes;
