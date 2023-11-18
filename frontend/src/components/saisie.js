import { useCallback, useState } from "react";
import "./saisie.css";
import crossIcon from "../images/corssIcon.png";
import icon from "../images/accounting 1.jpg";
import PortalPopup from "./portal-popup";
import InNavbar from "./InnerComponents/InNavbar/InNavbar";

const Saisie = ({ onClose }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Bilan" to the project
  }, []);

  const openNavbar = useCallback(() => {
    setIsNavbarOpen(true);
  }, []);

  const closeNavbar = useCallback(() => {
    setIsNavbarOpen(false);
  }, []);

  const handleSaisieClick = () => {
    openNavbar();

    //  onClose() Trigger the onClose prop received through props.
  };

  return (
    <>
      <div className="Inner-PopUp__etats">
        <div className="Inner-PopUp__saisie-inner">
          <div className="Inner-PopUp__etats-group">
            <span className="etats2"></span>
            <img
              className="icon-park-solidclose-one1"
              alt=""
              onClick={onClose} // Trigger onClose when the close icon is clicked.
              src={crossIcon}
            />
          </div>
        </div>

        <div className="v3btlkprm-1-parent">
          <img className="Inner-PopUp__v3btlkprm-1-icon" alt="" src={icon} />
          <div className="frame-parent4">
            <div className="etats-parent">
              <div className="etats1">Saisie</div>
            </div>
            <div className="frame-wrapper8">
              <div className="group-container">
                <div className="rectangle-parent" onClick={handleSaisieClick}>
                  <div className="Inner-PopUp__group-item">
                    <span className="compte-de-rsultat1">
                      Saisir une écriture
                    </span>
                  </div>
                </div>

                <div
                  className="rectangle-parent"
                  onClick={onGroupContainer1Click}
                >
                  <div className="Inner-PopUp__group-second-item">
                    <span className="compte-de-rsultat1">
                      Rechercher une écriture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isNavbarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavbar}
        >
          <InNavbar onClosingInNavbar={closeNavbar} />
        </PortalPopup>
      )}
    </>
  );
};

export default Saisie;
