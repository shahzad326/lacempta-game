import { useState, useCallback } from "react";

import PortalPopup from "../components/portal-popup";
import Saisie from "../components/saisie";
import Comptes from "../components/comptes";
import Cloture from "../components/cloture";
import Etats from "../components/etats";
import Dtails from "../components/dtails";
import Calculator from "../components/calculator";

import "./pageDoccueil.css";
import { Link } from "react-router-dom";

import Keyboard from "../images/asaview-3d-keyboard-buttons (1) 1.png";
import Second from "../images/rectangle-25@2x.png";
import Third from "../images/rectangle-29@2x.png";
import Fourth from "../images/rectangle-27@2x.png";
import Fifth from "../images/rectangle-66@2x.png";
import Sixth from "../images/rectangle-65@2x.png";
import information from "../images/information-1@2x.png";
import CalculatorImage from "../images/calculator-2@2x.png";
import Setting from "../images/settings-1.svg";
import Navbar from "../component/Navbar/Navbar";
import ReglesDeJeu from "../components/ReglesDeJeu";

import MiddleNavSecond from "./NavbarComponent/MiddleNav/MiddleNavSecond/MiddleNavSecond";

const PageDaccueil = () => {
  const [isRegleDuJeuOpen, setRegleDuJeuOpen] = useState(false);
  const [isSaisieOpen, setSaisieOpen] = useState(false);
  const [isComptesOpen, setComptesOpen] = useState(false);
  const [isClotureOpen, setClotureOpen] = useState(false);
  const [isEtatsOpen, setEtatsOpen] = useState(false);
  const [isDtailsOpen, setDtailsOpen] = useState(false);
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Prise de note" to the project
  }, []);

  const openRegleDuJeu = useCallback(() => {
    setRegleDuJeuOpen(true);
  }, []);

  const closeRegleDuJeu = useCallback(() => {
    setRegleDuJeuOpen(false);
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // Please sync "Parametres du jeu" to the project
  }, []);

  const onFrameContainer11Click = useCallback(() => {
    // Please sync "Connexion" to the project
  }, []);

  const onFrameContainer12Click = useCallback(() => {
    // Please sync "Aide" to the project
  }, []);

  const openSaisie = useCallback(() => {
    setSaisieOpen(true);
  }, []);

  const closeSaisie = useCallback(() => {
    setSaisieOpen(false);
  }, []);

  const openComptes = useCallback(() => {
    setComptesOpen(true);
  }, []);

  const closeComptes = useCallback(() => {
    setComptesOpen(false);
  }, []);

  const openCloture = useCallback(() => {
    setClotureOpen(true);
  }, []);

  const closeCloture = useCallback(() => {
    setClotureOpen(false);
  }, []);

  const openEtats = useCallback(() => {
    setEtatsOpen(true);
  }, []);

  const closeEtats = useCallback(() => {
    setEtatsOpen(false);
  }, []);

  const onFrameContainer34Click = useCallback(() => {
    // Please sync "Document comptable" to the project
  }, []);

  const onFrameContainer38Click = useCallback(() => {
    // Please sync "Ressources Pedagogiques" to the project
  }, []);

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
    <>
      <Navbar />
      <MiddleNavSecond />
      <div className="MainContainer-page-daccueil">
        <div className="pageDaccuel-frame-parent1">
          <div className="HomeTopThreeContainer">
            <div className="pageDaccuel-instance-parent" onClick={openSaisie}>
              <div className="pageDaccuel-FirstTopContaner">
                <img
                  className="pageDaccuel-asaview-3d-keyboard-buttons-1-icon"
                  alt=""
                  src={Keyboard}
                />
              </div>
              <div className="saisies-parent">
                <b className="saisies">Saisies</b>
                <div className="saisir-une-criture-container">
                  <p className="saisir-une-criture">{`Saisir une écriture `}</p>
                  <p className="saisir-une-criture">Rechercher une écriture</p>
                </div>
                <div className="frame-wrapper2">
                  <div className="voir-parent">
                    <div className="se-dconnecter">Voir</div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      className="basilarrow-left-outline-icon"
                    >
                      <path
                        d="M12.0559 7.78711C11.9886 7.72443 11.9347 7.64884 11.8973 7.56486C11.8598 7.48088 11.8397 7.39022 11.8381 7.29829C11.8365 7.20636 11.8534 7.11505 11.8878 7.0298C11.9223 6.94455 11.9735 6.8671 12.0385 6.80209C12.1035 6.73708 12.181 6.68583 12.2662 6.65139C12.3515 6.61696 12.4428 6.60005 12.5347 6.60167C12.6266 6.60329 12.7173 6.62341 12.8013 6.66083C12.8853 6.69825 12.9609 6.7522 13.0235 6.81947L16.675 10.4709C16.7387 10.5344 16.7892 10.6098 16.8237 10.6928C16.8582 10.7758 16.876 10.8648 16.876 10.9547C16.876 11.0447 16.8582 11.1337 16.8237 11.2167C16.7892 11.2997 16.7387 11.3751 16.675 11.4386L13.0235 15.09C12.9609 15.1573 12.8853 15.2112 12.8013 15.2487C12.7173 15.2861 12.6266 15.3062 12.5347 15.3078C12.4428 15.3094 12.3515 15.2925 12.2662 15.2581C12.181 15.2237 12.1035 15.1724 12.0385 15.1074C11.9735 15.0424 11.9223 14.9649 11.8878 14.8797C11.8534 14.7944 11.8365 14.7031 11.8381 14.6112C11.8397 14.5193 11.8598 14.4286 11.8973 14.3446C11.9347 14.2607 11.9886 14.1851 12.0559 14.1224L14.5389 11.6394H5.69323C5.51165 11.6394 5.33751 11.5673 5.20911 11.4389C5.08071 11.3105 5.00858 11.1363 5.00858 10.9547C5.00858 10.7732 5.08071 10.599 5.20911 10.4706C5.33751 10.3422 5.51165 10.2701 5.69323 10.2701H14.5389L12.0559 7.78711Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="pageDaccuel-instance-parent" onClick={openComptes}>
              <div className="pageDocceuel__TopSecondContainer">
                <img
                  className="pageDoccuel-instance-child"
                  alt=""
                  src={Second}
                />
              </div>
              <div className="frame-parent2">
                <div className="comptes-parent">
                  <b className="saisies">Comptes</b>
                  <div className="saisir-une-criture-container">
                    <p className="saisir-une-criture">Consulter les comptes</p>
                    <p className="saisir-une-criture">{`Lettrer les comptes `}</p>
                    <p className="saisir-une-criture">Plan Comptable</p>
                  </div>
                </div>
                <div className="frame-wrapper2">
                  <div className="voir-parent">
                    <div className="se-dconnecter">Voir</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      className="basilarrow-left-outline-icon"
                    >
                      <path
                        d="M12.0559 7.78711C11.9886 7.72443 11.9347 7.64884 11.8973 7.56486C11.8598 7.48088 11.8397 7.39022 11.8381 7.29829C11.8365 7.20636 11.8534 7.11505 11.8878 7.0298C11.9223 6.94455 11.9735 6.8671 12.0385 6.80209C12.1035 6.73708 12.181 6.68583 12.2662 6.65139C12.3515 6.61696 12.4428 6.60005 12.5347 6.60167C12.6266 6.60329 12.7173 6.62341 12.8013 6.66083C12.8853 6.69825 12.9609 6.7522 13.0235 6.81947L16.675 10.4709C16.7387 10.5344 16.7892 10.6098 16.8237 10.6928C16.8582 10.7758 16.876 10.8648 16.876 10.9547C16.876 11.0447 16.8582 11.1337 16.8237 11.2167C16.7892 11.2997 16.7387 11.3751 16.675 11.4386L13.0235 15.09C12.9609 15.1573 12.8853 15.2112 12.8013 15.2487C12.7173 15.2861 12.6266 15.3062 12.5347 15.3078C12.4428 15.3094 12.3515 15.2925 12.2662 15.2581C12.181 15.2237 12.1035 15.1724 12.0385 15.1074C11.9735 15.0424 11.9223 14.9649 11.8878 14.8797C11.8534 14.7944 11.8365 14.7031 11.8381 14.6112C11.8397 14.5193 11.8598 14.4286 11.8973 14.3446C11.9347 14.2607 11.9886 14.1851 12.0559 14.1224L14.5389 11.6394H5.69323C5.51165 11.6394 5.33751 11.5673 5.20911 11.4389C5.08071 11.3105 5.00858 11.1363 5.00858 10.9547C5.00858 10.7732 5.08071 10.599 5.20911 10.4706C5.33751 10.3422 5.51165 10.2701 5.69323 10.2701H14.5389L12.0559 7.78711Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="pageDaccuel-instance-parent" onClick={openCloture}>
              <div className="PageDoccuel-rectangle-container">
                <img className="PageDoccuel-instance-item" alt="" src={Third} />
              </div>
              <div className="frame-parent3">
                <div className="cltures-parent">
                  <b className="saisies">Clôtures</b>
                  <div className="saisir-une-criture-container">
                    <p className="saisir-une-criture">{`Balance `}</p>
                    <p className="saisir-une-criture">Journaux</p>
                    <p className="saisir-une-criture">Grand-Livre</p>
                  </div>
                </div>
                <div className="frame-wrapper2">
                  <div className="voir-parent">
                    <div className="se-dconnecter">Voir</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      className="basilarrow-left-outline-icon"
                    >
                      <path
                        d="M12.0559 7.78711C11.9886 7.72443 11.9347 7.64884 11.8973 7.56486C11.8598 7.48088 11.8397 7.39022 11.8381 7.29829C11.8365 7.20636 11.8534 7.11505 11.8878 7.0298C11.9223 6.94455 11.9735 6.8671 12.0385 6.80209C12.1035 6.73708 12.181 6.68583 12.2662 6.65139C12.3515 6.61696 12.4428 6.60005 12.5347 6.60167C12.6266 6.60329 12.7173 6.62341 12.8013 6.66083C12.8853 6.69825 12.9609 6.7522 13.0235 6.81947L16.675 10.4709C16.7387 10.5344 16.7892 10.6098 16.8237 10.6928C16.8582 10.7758 16.876 10.8648 16.876 10.9547C16.876 11.0447 16.8582 11.1337 16.8237 11.2167C16.7892 11.2997 16.7387 11.3751 16.675 11.4386L13.0235 15.09C12.9609 15.1573 12.8853 15.2112 12.8013 15.2487C12.7173 15.2861 12.6266 15.3062 12.5347 15.3078C12.4428 15.3094 12.3515 15.2925 12.2662 15.2581C12.181 15.2237 12.1035 15.1724 12.0385 15.1074C11.9735 15.0424 11.9223 14.9649 11.8878 14.8797C11.8534 14.7944 11.8365 14.7031 11.8381 14.6112C11.8397 14.5193 11.8598 14.4286 11.8973 14.3446C11.9347 14.2607 11.9886 14.1851 12.0559 14.1224L14.5389 11.6394H5.69323C5.51165 11.6394 5.33751 11.5673 5.20911 11.4389C5.08071 11.3105 5.00858 11.1363 5.00858 10.9547C5.00858 10.7732 5.08071 10.599 5.20911 10.4706C5.33751 10.3422 5.51165 10.2701 5.69323 10.2701H14.5389L12.0559 7.78711Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="HomeBottomThreeContainer">
            <div className="pageDaccuel-instance-parent" onClick={openEtats}>
              <div className="pageDoccuel-rectangle-frame">
                <img className="instance-inner" alt="" src={Fourth} />
              </div>
              <div className="frame-parent2">
                <div className="comptes-parent">
                  <b className="saisies">États</b>
                  <div className="saisir-une-criture-container">
                    <p className="saisir-une-criture">Compte de résultat</p>
                    <p className="saisir-une-criture">Bilan </p>
                  </div>
                </div>
                <div className="frame-wrapper2">
                  <div className="voir-parent">
                    <div className="se-dconnecter">Voir</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      className="basilarrow-left-outline-icon"
                    >
                      <path
                        d="M12.0559 7.78711C11.9886 7.72443 11.9347 7.64884 11.8973 7.56486C11.8598 7.48088 11.8397 7.39022 11.8381 7.29829C11.8365 7.20636 11.8534 7.11505 11.8878 7.0298C11.9223 6.94455 11.9735 6.8671 12.0385 6.80209C12.1035 6.73708 12.181 6.68583 12.2662 6.65139C12.3515 6.61696 12.4428 6.60005 12.5347 6.60167C12.6266 6.60329 12.7173 6.62341 12.8013 6.66083C12.8853 6.69825 12.9609 6.7522 13.0235 6.81947L16.675 10.4709C16.7387 10.5344 16.7892 10.6098 16.8237 10.6928C16.8582 10.7758 16.876 10.8648 16.876 10.9547C16.876 11.0447 16.8582 11.1337 16.8237 11.2167C16.7892 11.2997 16.7387 11.3751 16.675 11.4386L13.0235 15.09C12.9609 15.1573 12.8853 15.2112 12.8013 15.2487C12.7173 15.2861 12.6266 15.3062 12.5347 15.3078C12.4428 15.3094 12.3515 15.2925 12.2662 15.2581C12.181 15.2237 12.1035 15.1724 12.0385 15.1074C11.9735 15.0424 11.9223 14.9649 11.8878 14.8797C11.8534 14.7944 11.8365 14.7031 11.8381 14.6112C11.8397 14.5193 11.8598 14.4286 11.8973 14.3446C11.9347 14.2607 11.9886 14.1851 12.0559 14.1224L14.5389 11.6394H5.69323C5.51165 11.6394 5.33751 11.5673 5.20911 11.4389C5.08071 11.3105 5.00858 11.1363 5.00858 10.9547C5.00858 10.7732 5.08071 10.599 5.20911 10.4706C5.33751 10.3422 5.51165 10.2701 5.69323 10.2701H14.5389L12.0559 7.78711Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pageDaccuel-instance-parent"
              onClick={onFrameContainer34Click}
            >
              <div className="frame-inner">
                <img className="frame-inner" alt="" src={Fifth} />
              </div>

              <div className="frame-parent3">
                <div className="cltures-parent">
                  <b className="DocumentsCompaitable">
                    Documents <br /> Comptables
                  </b>
                  <div className="saisir-une-criture-container">
                    <p className="saisir-une-criture">{`   Factures d’achat `}</p>

                    <p className="saisir-une-criture">Factures de ventes </p>
                    <p className="saisir-une-criture">Banque</p>
                  </div>
                </div>
                <div className="frame-wrapper2">
                  <div className="voir-parent">
                    <div className="se-dconnecter">Voir</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      className="basilarrow-left-outline-icon"
                    >
                      <path
                        d="M12.0559 7.78711C11.9886 7.72443 11.9347 7.64884 11.8973 7.56486C11.8598 7.48088 11.8397 7.39022 11.8381 7.29829C11.8365 7.20636 11.8534 7.11505 11.8878 7.0298C11.9223 6.94455 11.9735 6.8671 12.0385 6.80209C12.1035 6.73708 12.181 6.68583 12.2662 6.65139C12.3515 6.61696 12.4428 6.60005 12.5347 6.60167C12.6266 6.60329 12.7173 6.62341 12.8013 6.66083C12.8853 6.69825 12.9609 6.7522 13.0235 6.81947L16.675 10.4709C16.7387 10.5344 16.7892 10.6098 16.8237 10.6928C16.8582 10.7758 16.876 10.8648 16.876 10.9547C16.876 11.0447 16.8582 11.1337 16.8237 11.2167C16.7892 11.2997 16.7387 11.3751 16.675 11.4386L13.0235 15.09C12.9609 15.1573 12.8853 15.2112 12.8013 15.2487C12.7173 15.2861 12.6266 15.3062 12.5347 15.3078C12.4428 15.3094 12.3515 15.2925 12.2662 15.2581C12.181 15.2237 12.1035 15.1724 12.0385 15.1074C11.9735 15.0424 11.9223 14.9649 11.8878 14.8797C11.8534 14.7944 11.8365 14.7031 11.8381 14.6112C11.8397 14.5193 11.8598 14.4286 11.8973 14.3446C11.9347 14.2607 11.9886 14.1851 12.0559 14.1224L14.5389 11.6394H5.69323C5.51165 11.6394 5.33751 11.5673 5.20911 11.4389C5.08071 11.3105 5.00858 11.1363 5.00858 10.9547C5.00858 10.7732 5.08071 10.599 5.20911 10.4706C5.33751 10.3422 5.51165 10.2701 5.69323 10.2701H14.5389L12.0559 7.78711Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pageDaccuel-instance-parent"
              onClick={onFrameContainer34Click}
            >
              <div className="frame-inner">
                <img className="frame-inner" alt="" src={Sixth} />
              </div>

              <Link to="/documents-comptables">
                <div className="frame-parent3">
                  <div className="cltures-parent">
                    <b className="DocumentsCompaitable">
                      Documents <br /> Comptables
                    </b>
                    <div className="saisir-une-criture-container">
                      <p className="saisir-une-criture">{`   Factures d’achat `}</p>

                      <p className="saisir-une-criture">Factures de ventes </p>
                      <p className="saisir-une-criture">Banque</p>
                    </div>
                  </div>
                  <div className="frame-wrapper2">
                    <div className="voir-parent">
                      <div className="se-dconnecter">Voir</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                        className="basilarrow-left-outline-icon"
                      >
                        <path
                          d="M12.0559 7.78711C11.9886 7.72443 11.9347 7.64884 11.8973 7.56486C11.8598 7.48088 11.8397 7.39022 11.8381 7.29829C11.8365 7.20636 11.8534 7.11505 11.8878 7.0298C11.9223 6.94455 11.9735 6.8671 12.0385 6.80209C12.1035 6.73708 12.181 6.68583 12.2662 6.65139C12.3515 6.61696 12.4428 6.60005 12.5347 6.60167C12.6266 6.60329 12.7173 6.62341 12.8013 6.66083C12.8853 6.69825 12.9609 6.7522 13.0235 6.81947L16.675 10.4709C16.7387 10.5344 16.7892 10.6098 16.8237 10.6928C16.8582 10.7758 16.876 10.8648 16.876 10.9547C16.876 11.0447 16.8582 11.1337 16.8237 11.2167C16.7892 11.2997 16.7387 11.3751 16.675 11.4386L13.0235 15.09C12.9609 15.1573 12.8853 15.2112 12.8013 15.2487C12.7173 15.2861 12.6266 15.3062 12.5347 15.3078C12.4428 15.3094 12.3515 15.2925 12.2662 15.2581C12.181 15.2237 12.1035 15.1724 12.0385 15.1074C11.9735 15.0424 11.9223 14.9649 11.8878 14.8797C11.8534 14.7944 11.8365 14.7031 11.8381 14.6112C11.8397 14.5193 11.8598 14.4286 11.8973 14.3446C11.9347 14.2607 11.9886 14.1851 12.0559 14.1224L14.5389 11.6394H5.69323C5.51165 11.6394 5.33751 11.5673 5.20911 11.4389C5.08071 11.3105 5.00858 11.1363 5.00858 10.9547C5.00858 10.7732 5.08071 10.599 5.20911 10.4706C5.33751 10.3422 5.51165 10.2701 5.69323 10.2701H14.5389L12.0559 7.78711Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="PageDoccuel-bottomContainermain">
          <div className="pageDoccuel-information-1-parent">
            <img
              className="pageDoccuel-information-1-icon"
              alt=""
              src={information}
              onClick={openDtails}
            />
            <div className="pageDoccuel-cliquez-sur-licne">
              Cliquez sur l’icône pour obtenir plus de détails
            </div>
          </div>

          <div className="pageDoccuel-information-1-parent">
            <img
              className="pageDoccuel-information-1-icon"
              alt=""
              src={CalculatorImage}
              onClick={openCalculator}
            />
            <div className="pageDoccuel-cliquez-sur-licne">
              Cliquez sur l’icône pour utiliser une calculatrice
            </div>
          </div>
        </div>
      </div>
      {isRegleDuJeuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRegleDuJeu}
        >
          <ReglesDeJeu onClose={closeRegleDuJeu} />
        </PortalPopup>
      )}
      {isSaisieOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSaisie}
        >
          <Saisie onClose={closeSaisie} />
        </PortalPopup>
      )}
      {isComptesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeComptes}
        >
          <Comptes onClose={closeComptes} />
        </PortalPopup>
      )}
      {isClotureOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCloture}
        >
          <Cloture onClose={closeCloture} />
        </PortalPopup>
      )}
      {isEtatsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEtats}
        >
          <Etats onClose={closeEtats} />
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
      {isCalculatorOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCalculator}
        >
          <Calculator onClose={closeCalculator} />
        </PortalPopup>
      )}
    </>
  );
};

export default PageDaccueil;
