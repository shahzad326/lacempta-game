import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./i-phone141.css";
import image37 from "../images/image-37@2x.png";
import Application2 from "../images/application@2x.png";
import Game from "../images/game@2x.png";
import MoneyBAd from "../images/moneybag-1@2x.png";
import Buiesness from "../images/business-1@2x.png";
import Option from "../images/option@2x.png";
import Target from "../images/target@2x.png";
import SeoIcon from "../images/seo@2x.png";
import Book from "../images/book@2x.png";
import Calculator from "../images/calculator-1@2x.png";
import Dataanalyst from "../images/dataanalyst@2x.png";
import Increase from "../images/increase@2x.png";
import Market from "../images/marketing@2x.png";
import rectangle from "../images/rectangle-2808.svg";
import Vector from "../images/vector.svg";

const IPhone141 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="PhoneContainer-iphone-14-1">
      <div className="PhoneContainer-iphone-14-1-child" />
      <div className="PhoneContainer-iphone-14-1-item" />
      <div className="PhoneContainer-iphone-14-1-inner" />
      <img className="PhoneContainer-image-37-icon" alt="" src={image37} />
      <div
        className="PhoneContainer-group-div"
        onClick={onGroupContainer1Click}
      >
        <div className="PhoneContainer-vector-parent">
          <img className="PhoneContainer-group-child" alt="" src={rectangle} />
          <b className="PhoneContainer-retour-au-menu">Retour au menu</b>
        </div>
      </div>
      <img className="PhoneContainer-vector-icon" alt="" src={Vector} />
      <img
        className="PhoneContainer-application-icon"
        alt=""
        src={Application2}
      />
      <img className="PhoneContainer-game-icon" alt="" src={Game} />
      <img className="PhoneContainer-money-bag-1-icon" alt="" src={MoneyBAd} />
      <img className="PhoneContainer-business-1-icon" alt="" src={Buiesness} />
      <img className="PhoneContainer-option-icon" alt="" src={Option} />
      <img className="PhoneContainer-target-icon" alt="" src={Target} />
      <img className="PhoneContainer-seo-icon" alt="" src={SeoIcon} />
      <img className="PhoneContainer-book-icon" alt="" src={Book} />
      <img
        className="PhoneContainer-calculator-1-icon"
        alt=""
        src={Calculator}
      />
      <img
        className="PhoneContainer-data-analyst-icon"
        alt=""
        src={Dataanalyst}
      />
      <img className="PhoneContainer-increase-icon" alt="" src={Increase} />
      <img className="PhoneContainer-marketing-icon" alt="" src={Market} />
    </div>
  );
};

export default IPhone141;
