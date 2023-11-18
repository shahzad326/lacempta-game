import { useState, useCallback } from "react";
import ConsultationDuneBalance from "./consultation-dune-balance";
import PortalPopup from "./portal-popup";
import "./cloture.css";

import crossIcon from "../images/corssIcon.png";
import icon from "../images/accountingCloture.jpg";

const Cloture = ({ onClose }) => {
  const [
    isConsultationDuneBalanceOpen,
    setConsultationDuneBalanceOpen,
  ] = useState(false);

  const openConsultationDuneBalance = useCallback(() => {
    setConsultationDuneBalanceOpen(true);
  }, []);

  const closeConsultationDuneBalance = useCallback(() => {
    setConsultationDuneBalanceOpen(false);
  }, []);

  return (
    <div className="PopupInner__cloture-etats">
      <div className="InnerPopUp-Saise__saisie-inner">
        <div className="InnerPopUp-Saise__etats-group">
          <span className="etats2"></span>
          <img
            className="icon-park-solidclose-one1"
            alt=""
            onClick={onClose}
            src={crossIcon}
          />
        </div>
      </div>

      <div className="v3btlkprm-1-parent__Cloture">
        <img className="Cloture__v3btlkprm-1-icon__Cloture" alt="" src={icon} />
        <div className="frame-parent4">
          <div className="etats-parent">
            <div className="etats1">Clôture</div>
          </div>
          <div className="Cloture__frame-wrapper8">
            <div className="group-container">
              <div
                className="rectangle-parent"
                onClick={openConsultationDuneBalance}
              >
                <div className="group-item">
                  <span className="compte-de-rsultat1">Balance</span>
                </div>
              </div>

              <div
                className="rectangle-parent"
                onClick={openConsultationDuneBalance}
              >
                <div className="group-second-item">
                  <span className="compte-de-rsultat1">Journaux</span>
                </div>
              </div>

              <div
                className="rectangle-parent"
                onClick={openConsultationDuneBalance}
              >
                <div className="group-Third-item">
                  <span className="compte-de-rsultat1">Grand Livre </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isConsultationDuneBalanceOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConsultationDuneBalance}
        >
          <ConsultationDuneBalance onClose={closeConsultationDuneBalance} />
        </PortalPopup>
      )}
    </div>
  );
};

export default Cloture;
