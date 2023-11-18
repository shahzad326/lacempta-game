import React, { useCallback, useState } from "react";
import "./Footer.css";
import information from "../../../images/information-1@2x.png";
import CalculatorImage from "../../../images/calculator-2@2x.png";
import PortalPopup from "../../portal-popup";
import Calculator from "../../calculator";
import Dtails from "../../dtails";

const Footer = () => {
  const [isDtailsOpen, setDtailsOpen] = useState(false);
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);

  const openDtails = useCallback(() => {
    setDtailsOpen(true);
  }, []);

  const closeDtails = useCallback(() => {
    setDtailsOpen(false);
  }, []);

  const openCalculator = useCallback(() => {
    setCalculatorOpen(true);
  }, []);

  const closeCalculator = useCallback(() => {
    setCalculatorOpen(false);
  }, []);
  return (
    <div>
      <div className="Footer__PageDoccuel-bottomContainermain">
        <div className="Footer__pageDoccuel-information-1-parent">
          <img
            className="Footer__pageDoccuel-information-1-icon"
            alt=""
            src={information}
            onClick={openDtails}
          />
        </div>
        <div className="Footer__pageDoccuel-information-1-parent">
          <img
            className="Footer__pageDoccuel-information-1-icon"
            alt=""
            src={CalculatorImage}
            onClick={openCalculator}
          />
        </div>
      </div>

      {isCalculatorOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalculator}
        >
          <Calculator onClose={closeCalculator} />
        </PortalPopup>
      )}

      {isDtailsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDtails}
        >
          <Dtails onClose={closeDtails} />
        </PortalPopup>
      )}
    </div>
  );
};

export default Footer;
