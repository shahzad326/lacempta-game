import { useCallback } from "react";
import LogoMain from '../../../images/LecemptaLogo.jpeg'
import "./Screen9.css";
import NavbarHome from "../../Navbar/NavbarHome/NavbarHome";

const Screen9 = () => {
  const onFrameContainer11Click = useCallback(() => {
    // Please sync "Page d'accueil" to the project
  }, []);

  const onGroupIconClick = useCallback(() => {
    // Please sync "Page d'accueil" to the project
  }, []);

  return (
    <>
    <NavbarHome/>
      <div className="Screen9__CenterHeading">
        <h1 className="Screen9Heading">Parametres du jeu</h1>
      </div>
    </>
  );
};

export default Screen9;
