import { useState, useCallback } from "react";
import FrameCOMPTE from "../components/frame-c-o-m-p-t-e";
import PortalPopup from "../components/portal-popup";
import Calendar from "../components/calendar";
import "./ConsultationDunCompte.css";

const ConsultationDunCompte = () => {
  const [isFrameCOMPTEOpen, setFrameCOMPTEOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [isCalendar1Open, setCalendar1Open] = useState(false);

  const openFrameCOMPTE = useCallback(() => {
    setFrameCOMPTEOpen(true);
  }, []);

  const closeFrameCOMPTE = useCallback(() => {
    setFrameCOMPTEOpen(false);
  }, []);

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

  const onFrameContainer31Click = useCallback(() => {
    // Please sync "Compte/Consultation/liste" to the project
  }, []);

  return (
    <>
      <div className="consultation-dun-compte">
        <div className="frame-parent">
          <div className="compte-parent">
            <div className="compte">Compte</div>
            <div className="frame-wrapper">
              <div className="frame-container">
                <div className="frame-group">
                  <div className="mditext-parent">
                    <img className="mditext-icon" alt="" src="/mditext.svg" />
                    <div className="liste-des-comptes">Liste des comptes</div>
                  </div>
                  <img
                    className="frame-child"
                    alt=""
                    src="/polygon-2.svg"
                    onClick={openFrameCOMPTE}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="compte-parent">
            <div className="compte">Période</div>
            <div className="frame-div">
              <div className="frame-wrapper1">
                <div
                  className="solarcalendar-line-duotone-parent"
                  onClick={openCalendar}
                >
                  <img
                    className="solarcalendar-line-duotone-icon"
                    alt=""
                    src="/solarcalendarlineduotone.svg"
                  />
                  <div className="ddmmaaaa">DD/MM/AAAA</div>
                </div>
              </div>
              <div className="frame-wrapper1">
                <div
                  className="solarcalendar-line-duotone-parent"
                  onClick={openCalendar1}
                >
                  <img
                    className="solarcalendar-line-duotone-icon"
                    alt=""
                    src="/solarcalendarlineduotone1.svg"
                  />
                  <div className="ddmmaaaa">DD/MM/AAAA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-div">
            <div className="journaux-parent">
              <div className="compte">Journaux</div>
              <div className="frame-wrapper3">
                <div className="frame-container">
                  <div className="frame-wrapper5">
                    <div className="mditext-parent">
                      <img
                        className="mditext-icon"
                        alt=""
                        src="/mditext1.svg"
                      />
                      <div className="liste-des-comptes">
                        Liste des journaux
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent1">
              <div className="frame-wrapper6">
                <div className="frame-container">
                  <div className="frame-parent2">
                    <div className="mditext-parent">
                      <img
                        className="mditext-icon"
                        alt=""
                        src="/mditext2.svg"
                      />
                      <div className="liste-des-comptes">
                        Liste des journaux
                      </div>
                    </div>
                    <img className="frame-item" alt="" src="/polygon-21.svg" />
                  </div>
                </div>
              </div>
              <div className="instance-parent">
                <div className="frame-parent3">
                  <div className="rectangle-wrapper">
                    <div className="frame-inner" />
                  </div>
                  <div className="lettres">Lettrées</div>
                </div>
                <div className="frame-parent3">
                  <div className="rectangle-wrapper">
                    <div className="frame-inner" />
                  </div>
                  <div className="lettres">Non-Lettrées</div>
                </div>
                <div className="frame-parent3">
                  <div className="rectangle-wrapper">
                    <div className="frame-inner" />
                  </div>
                  <div className="lettres">Toutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="frame-wrapper8">
            <div className="annuler-wrapper">
              <div className="ddmmaaaa">Annuler</div>
            </div>
          </div>
          <div className="valider-wrapper" onClick={onFrameContainer31Click}>
            <div className="ddmmaaaa">Valider</div>
          </div>
        </div>
        <div className="consultation-dun-compte-inner">
          <div className="consultation-dun-compte-parent">
            <div className="lettres">Consultation d’un compte</div>
            <img
              className="icon-park-solidclose-one"
              alt=""
              src="/iconparksolidcloseone.svg"
            />
          </div>
        </div>
      </div>
      {isFrameCOMPTEOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrameCOMPTE}
        >
          <FrameCOMPTE onClose={closeFrameCOMPTE} />
        </PortalPopup>
      )}
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

export default ConsultationDunCompte;
