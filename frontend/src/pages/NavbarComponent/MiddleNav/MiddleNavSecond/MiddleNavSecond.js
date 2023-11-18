import React from "react";
import "./MiddleNavSecond.css";

import Ellips from "../../../../images/ellipse-23@2x.png";
import Iphone from "../../../../images/iphone 1.png";
import { Link } from "react-router-dom";

const MiddleNavSecond = () => {
  return (
    <div>
      <div className="MiddleNavSecond__MainContainer">
        <div className="MiddleNavSecond__LeftContaine">
          <img src={Ellips} className="MainContainer__frame-child" alt="" />
          <div className="MiddleNavSecond__TEXtContainer">
            <span className="MiddleNavSecond__Hello">Hello</span>
            <div className="MiddleNavSecond__Name__OfCustomer">
              {" "}
              [Name of the customer]
            </div>
          </div>
        </div>

        <div className="MiddleNavSecond__Right__Cotnainer">
          <img className="PageDaccuel-iphone-1-icon" alt="" src={Iphone} />

          <div className="PageDaccuel-aide-wrapper">
            <b className="PageDaccuel-se-dconnecter">Aide</b>
          </div>
          <Link to="/login">
            <div className="PageDaccuel-se-dconnecter-wrapper">
              <b className="PageDaccuel-se-dconnecter">Se déconnecter</b>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiddleNavSecond;
