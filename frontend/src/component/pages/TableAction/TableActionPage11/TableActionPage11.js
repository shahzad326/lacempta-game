import React, { useState } from "react";

import calender from "../../../../images/calendar 1.png";

import "./TableActionPage11.css";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../../components/InnerComponents/footer/Footer";
import MonthNavbar from "./monthNavbar/MonthNavbar";

const TableActionPage11 = () => {
  return (
    <div>
      <Navbar />
      <MonthNavbar />

      <div className="WholeMainMonths__Container">
        <div className="TableActionPage9__Container">
          <div className="TableActionPage9__ContainerFirst ">
            <span className="TableAP9__TableActionPage9__Inner__Januavary">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9__January"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText__Januavary">
              Janvier
            </p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Février</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Mars</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Avril</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Mai</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Juin</p>
          </div>
        </div>

        <div className="TableActionPage9__Container">
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Juillet</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Août</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Septembre</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Octobre</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Novembre</p>
          </div>
          <div className="TableActionPage9__ContainerFirst">
            <span className="TableAP9__TableActionPage9__Inner">
              <span className="TableActionPage9__Calender">
                <img
                  src={calender}
                  className="TableAP9__InnerImage__TableActionPage9"
                  alt=""
                />
              </span>
            </span>
            <p className="TableActionPAge9__InnerCalenderText">Décembre</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TableActionPage11;
