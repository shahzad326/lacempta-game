import { useState, useCallback } from "react";
import Calendar from "./calendar";
import PortalPopup from "./portal-popup";
import "./consultation-dune-balance.css";
import crossIcon from "../images/corssIcon.png";
import Calender from "../images/solarcalendarlineduotone.svg";

const ConsultationDuneBalance = ({ onClose }) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isCalendar1Open, setCalendar1Open] = useState(false);

  const openCalendar = useCallback(() => {
    setCalendarOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setCalendarOpen(false);
  }, []);

  const openCalendar1 = useCallback(() => {
    setCalendar1Open(true);
  }, []);

  const closeCalendar1 = useCallback(() => {
    setCalendar1Open(false);
  }, []);

  const onFrameContainer27Click = useCallback(() => {
    // Please sync "Solde Balance" to the project
  }, []);

  const onValiderTextClick = useCallback(() => {
    // Please sync "Solde Balance" to the project
  }, []);

  return (
    <>
      <div className="consultation-dune-balance">
        <div className="consultation-dune-balance-inner">
          <div className="consultation-dune-balance-parent">
            <div className="lettres">Consultation d’une balance</div>
            <img
              className="icon-park-solidclose-one3"
              alt=""
              onClick={onClose}
              src={crossIcon}
            />
          </div>
        </div>
        <div className="frame-parent6">
          <div className="frame-wrapper10">
            <div className="type-de-balance-parent">
              <div className="type-de-balance">Type de balance</div>
              <div className="frame-wrapper11">
                <div className="frame-wrapper12">
                  <div className="instance-parent4">
                    <div className="frame-parent7">
                      <div className="rectangle-wrapper1">
                        <div className="frame-child1">
                          <input
                            type="checkbox"
                            id="clientsCheckbox"
                            className="custom-checkbox"
                          />
                        </div>
                      </div>
                      <label htmlFor="clientsCheckbox" className="lettres">
                        Clients
                      </label>
                    </div>
                    <div className="frame-parent7">
                      <div className="rectangle-wrapper1">
                        <div className="frame-child1">
                          <input
                            type="checkbox"
                            id="fournisseursCheckbox"
                            className="custom-checkbox"
                          />
                        </div>
                      </div>
                      <label htmlFor="fournisseursCheckbox" className="lettres">
                        Fournisseurs
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper11">
                <div className="frame-wrapper12">
                  <div className="instance-parent4">
                    <div className="frame-parent7">
                      <div className="rectangle-wrapper1">
                        <div className="frame-child1">
                          <input
                            type="checkbox"
                            id="bilanCheckbox"
                            className="custom-checkbox"
                          />
                        </div>
                      </div>
                      <label htmlFor="bilanCheckbox" className="lettres">
                        Bilan
                      </label>
                    </div>
                    <div className="frame-parent7">
                      <div className="rectangle-wrapper1">
                        <div className="frame-child1">
                          <input
                            type="checkbox"
                            id="compteResultatCheckbox"
                            className="custom-checkbox"
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="compteResultatCheckbox"
                        className="lettres"
                      >
                        Compte de résultat
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="priode-parent">
            <div className="priode">Période</div>
            <div className="frame-parent11">
              <div className="frame-wrapper15" onClick={openCalendar}>
                <div className="solarcalendar-line-duotone-parent">
                  <img
                    className="solarcalendar-line-duotone-icon"
                    alt=""
                    src={Calender}
                  />
                  <div className="ddmmaaaa">DD/MM/AAAA</div>
                </div>
              </div>
              <div className="frame-wrapper16">
                <div
                  className="solarcalendar-line-duotone-group"
                  onClick={openCalendar1}
                >
                  <img
                    className="solarcalendar-line-duotone-icon"
                    alt=""
                    src={Calender}
                  />
                  <div className="ddmmaaaa">DD/MM/AAAA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent12">
          <div className="frame-wrapper17">
            <div className="annuler-wrapper">
              <div className="ddmmaaaa">Annuler</div>
            </div>
          </div>
          <div className="valider-wrapper" onClick={onFrameContainer27Click}>
            <div className="valider" onClick={onValiderTextClick}>
              Valider
            </div>
          </div>
        </div>
      </div>
      {isCalendarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar}
        >
          <Calendar onClose={closeCalendar} />
        </PortalPopup>
      )}
      {isCalendar1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalendar1}
        >
          <Calendar onClose={closeCalendar1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ConsultationDuneBalance;
