import { useCallback, useState } from "react";
import "./Etat.css";
import crossIcon from "../images/corssIcon.png";
import icon from "../images/accountingCompte.jpg";
import Calendar from "./calendar";
import PortalPopup from "./portal-popup";

const Etats = ({ onClose }) => {
  const [isCalenderOpen, setiIsCalenderOpen] = useState(false);
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Compte de résultat" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "Bilan" to the project
  }, []);

  const openCalendar = useCallback(() => {
    setiIsCalenderOpen(true);
  }, []);

  const closeCalender = useCallback(() => {
    setiIsCalenderOpen(false);
  }, []);

  return (
    <>
      <div className="Etats__etats">
        <div className="Etats__etats-inner">
          <div className="Etats__etats-group">
            <span className="etats2">Etats</span>
            <img
              className="icon-park-solidclose-one1"
              alt=""
              onClick={onClose}
              src={crossIcon}
            />
          </div>
        </div>

        <div className="v3btlkprm-1-parent__Etats">
          <img className="v3btlkprm-1-icon__Etats" alt="" src={icon} />
          <div className="frame-parent4">
            <div className="etats-parent">
              <div className="etats1">Etats</div>
            </div>
            <div className="frame-wrapper8">
              <div className="group-container">
                <div className="rectangle-parent" onClick={openCalendar}>
                  <div className="group-item">
                    <span className="compte-de-rsultat1">
                      Compte de résultat
                    </span>
                  </div>
                </div>

                <div
                  className="rectangle-parent"
                  onClick={onGroupContainerClick}
                >
                  <div className="group-second-item">
                    <span className="compte-de-rsultat1">
                      Compte de résultat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isCalenderOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalender}
        >
          <Calendar onClose={closeCalender} />
        </PortalPopup>
      )}
    </>
  );
};

export default Etats;
