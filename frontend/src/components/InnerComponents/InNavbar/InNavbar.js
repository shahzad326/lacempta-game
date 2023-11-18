import { useCallback, useState } from "react";
import "./InNavbar.css";
import crossIcon from "../../../images/corssIcon.png";
import icon from "../../../images/3v3btlkprm-1@2x.png";

const InNavbar = ({ onClosingInNavbar }) => {
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
      <div className="InNavbar_MainContainer">
        <div className="InNavbar__etats-inner">
          <div className="etats-group">
            <span className="etats2">Choix du journal</span>
            <img
              className="icon-park-solidclose-one1"
              alt=""
              onClick={onClosingInNavbar}
              src={crossIcon}
            />
          </div>
        </div>

        <div className="InNavbar_SecondContainer">
          <ul>
            <li>
              <div className="MainInnerNavbarListing">
                <span className="InnerNavbarText">Banque</span>
              </div>
            </li>

            <li>
              <div className="MainInnerNavbarListing">
                <span className="InnerNavbarText">Caisse</span>
                <div></div>
              </div>
            </li>

            <li>
              <div className="MainInnerNavbarListing">
                <span className="InnerNavbarText">Achats</span>
              </div>
            </li>

            <li>
              <div className="MainInnerNavbarListing">
                <span className="InnerNavbarText">A-nouveaux</span>
              </div>
            </li>

            <li>
              <div className="MainInnerNavbarListing">
                <span className="InnerNavbarText">Operation Diverses</span>
              </div>
            </li>

            <li>
              <div className="MainInnerNavbarListing">
                <span className="InnerNavbarText">Ventes</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InNavbar;
