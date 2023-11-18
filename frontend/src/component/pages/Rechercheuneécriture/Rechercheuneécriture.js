import React, { useState, useCallback } from "react";
import Calendar from "react-calendar";
import "./Rechercheuneécriture.css";
import Navbar from "../../Navbar/Navbar";
import RechercheuneécritureMiddleNavbar from "./RechercheuneécrituremiddleNavbar/RechercheuneécritureMiddleNavbar";
import Footer from "../../../components/InnerComponents/footer/Footer";
import PortalPopup from "../../../components/portal-popup";
import InNavbar from "../../../components/InnerComponents/InNavbar/InNavbar";

const Rechercheuneécriture = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openNavbar = useCallback(() => {
    setIsNavbarOpen(true);
  }, []);

  const closeNavbar = useCallback(() => {
    setIsNavbarOpen(false);
  }, []);

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };
  return (
    <>
      <div>
        <Navbar />

        <RechercheuneécritureMiddleNavbar />

        <div className="MainTable__Rechercheuneécriture__ThirdNavbar">
          <div className="MainTable__Rechercheuneécriture__FirstContainer">
            <div className="Rechercheuneécriture__TopHeading">
              <span className="Rechercheuneécriture__containerHeading">
                Période
              </span>
            </div>

            <div className="MainTable__Rechercheuneécriture__InnerContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                onClick={handleCalendarClick} // Open the calendar on SVG click
              >
                <path
                  d="M2.4209 10.3587C2.4209 7.22269 2.4209 5.65427 3.39545 4.68046C4.36917 3.70581 5.93743 3.70581 9.07312 3.70581H12.3992C15.5349 3.70581 17.1032 3.70581 18.0769 4.68046C19.0515 5.65427 19.0515 7.22269 19.0515 10.3587V12.0219C19.0515 15.1579 19.0515 16.7263 18.0769 17.7001C17.1032 18.6748 15.5349 18.6748 12.3992 18.6748H9.07312C5.93743 18.6748 4.36917 18.6748 3.39545 17.7001C2.4209 16.7263 2.4209 15.1579 2.4209 12.0219V10.3587Z"
                  stroke="#004AAD"
                  stroke-opacity="0.3"
                  stroke-width="1.66181"
                />
                <path
                  opacity="0.5"
                  d="M6.57879 3.70567V2.45825M14.8941 3.70567V2.45825M2.83691 7.86371H18.6359"
                  stroke="#004AAD"
                  stroke-opacity="0.3"
                  stroke-width="1.66181"
                  stroke-linecap="round"
                />
                <path
                  d="M15.7254 14.5167C15.7254 14.7372 15.6378 14.9488 15.4819 15.1047C15.3259 15.2607 15.1144 15.3483 14.8939 15.3483C14.6733 15.3483 14.4618 15.2607 14.3059 15.1047C14.15 14.9488 14.0623 14.7372 14.0623 14.5167C14.0623 14.2961 14.15 14.0846 14.3059 13.9287C14.4618 13.7727 14.6733 13.6851 14.8939 13.6851C15.1144 13.6851 15.3259 13.7727 15.4819 13.9287C15.6378 14.0846 15.7254 14.2961 15.7254 14.5167ZM15.7254 11.1903C15.7254 11.4108 15.6378 11.6223 15.4819 11.7783C15.3259 11.9342 15.1144 12.0219 14.8939 12.0219C14.6733 12.0219 14.4618 11.9342 14.3059 11.7783C14.15 11.6223 14.0623 11.4108 14.0623 11.1903C14.0623 10.9697 14.15 10.7582 14.3059 10.6022C14.4618 10.4463 14.6733 10.3586 14.8939 10.3586C15.1144 10.3586 15.3259 10.4463 15.4819 10.6022C15.6378 10.7582 15.7254 10.9697 15.7254 11.1903ZM11.5678 14.5167C11.5678 14.7372 11.4802 14.9488 11.3242 15.1047C11.1683 15.2607 10.9568 15.3483 10.7362 15.3483C10.5157 15.3483 10.3042 15.2607 10.1483 15.1047C9.99232 14.9488 9.90471 14.7372 9.90471 14.5167C9.90471 14.2961 9.99232 14.0846 10.1483 13.9287C10.3042 13.7727 10.5157 13.6851 10.7362 13.6851C10.9568 13.6851 11.1683 13.7727 11.3242 13.9287C11.4802 14.0846 11.5678 14.2961 11.5678 14.5167ZM11.5678 11.1903C11.5678 11.4108 11.4802 11.6223 11.3242 11.7783C11.1683 11.9342 10.9568 12.0219 10.7362 12.0219C10.5157 12.0219 10.3042 11.9342 10.1483 11.7783C9.99232 11.6223 9.90471 11.4108 9.90471 11.1903C9.90471 10.9697 9.99232 10.7582 10.1483 10.6022C10.3042 10.4463 10.5157 10.3586 10.7362 10.3586C10.9568 10.3586 11.1683 10.4463 11.3242 10.6022C11.4802 10.7582 11.5678 10.9697 11.5678 11.1903ZM7.41013 14.5167C7.41013 14.7372 7.32252 14.9488 7.16658 15.1047C7.01064 15.2607 6.79913 15.3483 6.5786 15.3483C6.35806 15.3483 6.14656 15.2607 5.99062 15.1047C5.83468 14.9488 5.74707 14.7372 5.74707 14.5167C5.74707 14.2961 5.83468 14.0846 5.99062 13.9287C6.14656 13.7727 6.35806 13.6851 6.5786 13.6851C6.79913 13.6851 7.01064 13.7727 7.16658 13.9287C7.32252 14.0846 7.41013 14.2961 7.41013 14.5167ZM7.41013 11.1903C7.41013 11.4108 7.32252 11.6223 7.16658 11.7783C7.01064 11.9342 6.79913 12.0219 6.5786 12.0219C6.35806 12.0219 6.14656 11.9342 5.99062 11.7783C5.83468 11.6223 5.74707 11.4108 5.74707 11.1903C5.74707 10.9697 5.83468 10.7582 5.99062 10.6022C6.14656 10.4463 6.35806 10.3586 6.5786 10.3586C6.79913 10.3586 7.01064 10.4463 7.16658 10.6022C7.32252 10.7582 7.41013 10.9697 7.41013 11.1903Z"
                  fill="#004AAD"
                  fill-opacity="0.3"
                />
              </svg>
              {isCalendarOpen && (
                <Calendar value={selectedDate} onChange={handleDateChange} />
              )}

              <div className="InnerContainer__heading">
                {selectedDate.toLocaleDateString()}{" "}
                {/* Display selected date */}
              </div>
            </div>
          </div>

          <div className="MainTable__Rechercheuneécriture__FirstContainer">
            <div className="Rechercheuneécriture__TopHeading">
              <span className="Rechercheuneécriture__containerHeading">
                Période
              </span>
            </div>

            <div className="MainTable__Rechercheuneécriture__InnerContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M2.4209 10.3587C2.4209 7.22269 2.4209 5.65427 3.39545 4.68046C4.36917 3.70581 5.93743 3.70581 9.07312 3.70581H12.3992C15.5349 3.70581 17.1032 3.70581 18.0769 4.68046C19.0515 5.65427 19.0515 7.22269 19.0515 10.3587V12.0219C19.0515 15.1579 19.0515 16.7263 18.0769 17.7001C17.1032 18.6748 15.5349 18.6748 12.3992 18.6748H9.07312C5.93743 18.6748 4.36917 18.6748 3.39545 17.7001C2.4209 16.7263 2.4209 15.1579 2.4209 12.0219V10.3587Z"
                  stroke="#004AAD"
                  stroke-opacity="0.3"
                  stroke-width="1.66181"
                />
                <path
                  opacity="0.5"
                  d="M6.57879 3.70567V2.45825M14.8941 3.70567V2.45825M2.83691 7.86371H18.6359"
                  stroke="#004AAD"
                  stroke-opacity="0.3"
                  stroke-width="1.66181"
                  stroke-linecap="round"
                />
                <path
                  d="M15.7254 14.5167C15.7254 14.7372 15.6378 14.9488 15.4819 15.1047C15.3259 15.2607 15.1144 15.3483 14.8939 15.3483C14.6733 15.3483 14.4618 15.2607 14.3059 15.1047C14.15 14.9488 14.0623 14.7372 14.0623 14.5167C14.0623 14.2961 14.15 14.0846 14.3059 13.9287C14.4618 13.7727 14.6733 13.6851 14.8939 13.6851C15.1144 13.6851 15.3259 13.7727 15.4819 13.9287C15.6378 14.0846 15.7254 14.2961 15.7254 14.5167ZM15.7254 11.1903C15.7254 11.4108 15.6378 11.6223 15.4819 11.7783C15.3259 11.9342 15.1144 12.0219 14.8939 12.0219C14.6733 12.0219 14.4618 11.9342 14.3059 11.7783C14.15 11.6223 14.0623 11.4108 14.0623 11.1903C14.0623 10.9697 14.15 10.7582 14.3059 10.6022C14.4618 10.4463 14.6733 10.3586 14.8939 10.3586C15.1144 10.3586 15.3259 10.4463 15.4819 10.6022C15.6378 10.7582 15.7254 10.9697 15.7254 11.1903ZM11.5678 14.5167C11.5678 14.7372 11.4802 14.9488 11.3242 15.1047C11.1683 15.2607 10.9568 15.3483 10.7362 15.3483C10.5157 15.3483 10.3042 15.2607 10.1483 15.1047C9.99232 14.9488 9.90471 14.7372 9.90471 14.5167C9.90471 14.2961 9.99232 14.0846 10.1483 13.9287C10.3042 13.7727 10.5157 13.6851 10.7362 13.6851C10.9568 13.6851 11.1683 13.7727 11.3242 13.9287C11.4802 14.0846 11.5678 14.2961 11.5678 14.5167ZM11.5678 11.1903C11.5678 11.4108 11.4802 11.6223 11.3242 11.7783C11.1683 11.9342 10.9568 12.0219 10.7362 12.0219C10.5157 12.0219 10.3042 11.9342 10.1483 11.7783C9.99232 11.6223 9.90471 11.4108 9.90471 11.1903C9.90471 10.9697 9.99232 10.7582 10.1483 10.6022C10.3042 10.4463 10.5157 10.3586 10.7362 10.3586C10.9568 10.3586 11.1683 10.4463 11.3242 10.6022C11.4802 10.7582 11.5678 10.9697 11.5678 11.1903ZM7.41013 14.5167C7.41013 14.7372 7.32252 14.9488 7.16658 15.1047C7.01064 15.2607 6.79913 15.3483 6.5786 15.3483C6.35806 15.3483 6.14656 15.2607 5.99062 15.1047C5.83468 14.9488 5.74707 14.7372 5.74707 14.5167C5.74707 14.2961 5.83468 14.0846 5.99062 13.9287C6.14656 13.7727 6.35806 13.6851 6.5786 13.6851C6.79913 13.6851 7.01064 13.7727 7.16658 13.9287C7.32252 14.0846 7.41013 14.2961 7.41013 14.5167ZM7.41013 11.1903C7.41013 11.4108 7.32252 11.6223 7.16658 11.7783C7.01064 11.9342 6.79913 12.0219 6.5786 12.0219C6.35806 12.0219 6.14656 11.9342 5.99062 11.7783C5.83468 11.6223 5.74707 11.4108 5.74707 11.1903C5.74707 10.9697 5.83468 10.7582 5.99062 10.6022C6.14656 10.4463 6.35806 10.3586 6.5786 10.3586C6.79913 10.3586 7.01064 10.4463 7.16658 10.6022C7.32252 10.7582 7.41013 10.9697 7.41013 11.1903Z"
                  fill="#004AAD"
                  fill-opacity="0.3"
                />
              </svg>

              <div className="InnerContainer__heading">DD/MM/AA</div>
            </div>
          </div>

          <div className="MainTable__Rechercheuneécriture__ThirdContainer">
            <div className="Rechercheuneécriture__TopHeading">
              <span className="Rechercheuneécriture__containerHeading">
                Journaux
              </span>
            </div>

            <div className="MainTable__Rechercheuneécriture__ThirdInnerContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                onClick={openNavbar}
                className="Rechaerdinercjrutir__Journaux__Icon"
              >
                <path
                  d="M20.0512 6.29028V8.19343H2.92285V6.29028H20.0512ZM2.92285 17.7092H11.487V15.806H2.92285V17.7092ZM2.92285 12.9513H20.0512V11.0481H2.92285V12.9513Z"
                  fill="#004AAD"
                  fill-opacity="0.3"
                />
              </svg>
              <div className="InnerContainer__Thirdheading">
                Liste des journaux
              </div>
            </div>
          </div>

          <div className="MainTable__Rechercheuneécriture__FourthContainer">
            <div className="Rechercheuneécriture__TopHeading">
              <span className="Rechercheuneécriture__containerHeading">
                Montants
              </span>
            </div>

            <div className="MainTable__Rechercheuneécriture__ThirdInnerWholeContainer">
              <div className="MainTable__Rechercheuneécriture__FourthInnerContainer">
                <div className="InnerContainer__Thirdheading">Min</div>
              </div>

              <div className="MainTable__Rechercheuneécriture__FourthInnerContainer">
                <div className="InnerContainer__Thirdheading">Min</div>
              </div>
            </div>
          </div>

          <div className="MainTable__Rechercheuneécriture__ThirdContainer">
            <div className="Rechercheuneécriture__TopHeading">
              <span className="Rechercheuneécriture__containerHeading">
                Libellé
              </span>
            </div>

            <div className="MainTable__Rechercheuneécriture__ThirdInnerContainer">
              <div className="InnerContainer__Thirdheading">
                Entrer du texte
              </div>
            </div>
          </div>

          <div className="MainTable__Rechercheuneécriture__FifthContainer">
            <div className="Rechercheuneécriture__TopHeading">
              <span className="Rechercheuneécriture__containerHeading">
                Numero de pièce
              </span>
            </div>

            <div className="MainTable__Rechercheuneécriture__ThirdInnerContainer">
              <div className="InnerContainer__Thirdheading">
                Entrer du texte
              </div>
            </div>
          </div>

          <div className="MainTable__last_button__container">
            <span className="last_button__innerText">Valider</span>
          </div>
        </div>

        <div className="Rechercheuneécriture__TableContainer">
          <table>
            <thead>
              <tr className="Container__Rechercheuneécriture__AllTableHeading">
                <td className="Container__Rechercheuneécriture__tableHeading">
                  <span className="Rechercheuneécriture__tableHeadingText">
                    Date Comptable
                  </span>{" "}
                </td>

                <td className="Container__Rechercheuneécriture__tableHeading">
                  <span className="Rechercheuneécriture__tableHeadingText">
                    Journaux
                  </span>{" "}
                </td>

                <td className="Container__Rechercheuneécriture__tableHeading">
                  <span className="Rechercheuneécriture__tableHeadingText">
                    N° de pièce
                  </span>{" "}
                </td>

                <td className="Container__Rechercheuneécriture__tableHeading">
                  <span className="Rechercheuneécriture__tableHeadingText">
                    N° Compte
                  </span>{" "}
                </td>

                <td className="Container__Rechercheuneécriture__tableHeading">
                  <span className="Rechercheuneécriture__tableHeadingText">
                    Libellé Ecriture
                  </span>{" "}
                </td>

                <td className="Rechercheuneécriture__tableHeading">
                  <span className="Rechercheuneécriture__tableHeadingText">
                    Débit
                  </span>{" "}
                  <span className="Rechercheuneécriture__tableHeadingText">
                    Crédit
                  </span>{" "}
                  <span className="Rechercheuneécriture__tableHeadingText">
                    Actions
                  </span>{" "}
                </td>
              </tr>
            </thead>

            <tbody>
              <tr className="Rechercheuneécriture__AllTableHeadingInner">
                <td className="First__Rechercheuneécriture__tableHeading"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
              </tr>

              <tr className="Rechercheuneécriture__AllTableHeadingInner">
                <td className="First__Rechercheuneécriture__tableHeading"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
              </tr>

              <tr className="Rechercheuneécriture__AllTableHeadingInner">
                <td className="First__Rechercheuneécriture__tableHeading"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
              </tr>

              <tr className="Rechercheuneécriture__AllTableHeadingInner">
                <td className="First__Rechercheuneécriture__tableHeading"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
              </tr>

              <tr className="Rechercheuneécriture__AllTableHeadingInner">
                <td className="First__Rechercheuneécriture__tableHeading"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
              </tr>

              <tr className="Rechercheuneécriture__AllTableHeadingInner">
                <td className="First__Rechercheuneécriture__tableHeading"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
                <td className="MainTable__Rechercheuneécriture__tableHeading__Second"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="RecherHen__LastContainer">
          <Footer />

          <div className="Rechercheuneécriture__lastButton__container">
            <span className="Rechercheuneécriture__lastButton__text">
              Faire une nouvelle recherche
            </span>
          </div>
        </div>
      </div>

      {isNavbarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavbar}
        >
          <InNavbar onClose={closeNavbar} />
        </PortalPopup>
      )}
    </>
  );
};

export default Rechercheuneécriture;
