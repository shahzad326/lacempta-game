import React, { useState } from "react";
import word from "../../../../../images/word 2.png";
import "./JuneDocumentFile2.css";
import Navbar from "../../../../Navbar/Navbar";

const JuneDocumentFile2 = () => {
  return (
    <div>
      <Navbar />

      <div className="Table__MiddleNavbar__tableActionPage__FileSecond">
        <span className="MiddleNavbar__Arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <path
              d="M7.14648 21.4612H32.3683"
              stroke="#130F26"
              stroke-width="1.68145"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3193 31.5909L7.14648 21.4619L17.3193 11.3311"
              stroke="#130F26"
              stroke-width="1.68145"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div className="MiddleNavbar__Container__TableActionPage">
          <div className="MiddleNavbar__HomeContainer__TableActionPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M24.9108 14.7307C24.8148 14.7313 24.7196 14.7129 24.6307 14.6766C24.5419 14.6403 24.461 14.5868 24.3929 14.5192L13.9697 4.08879L3.54662 14.5192C3.40708 14.6387 3.22759 14.7011 3.04402 14.6941C2.86045 14.687 2.68631 14.6109 2.55641 14.481C2.42651 14.3511 2.35041 14.1769 2.34332 13.9934C2.33623 13.8098 2.39867 13.6303 2.51816 13.4908L13.4592 2.54975C13.5958 2.4139 13.7807 2.33765 13.9734 2.33765C14.1661 2.33765 14.351 2.4139 14.4876 2.54975L25.4286 13.4908C25.529 13.5932 25.597 13.7229 25.624 13.8637C25.6511 14.0045 25.6361 14.1501 25.5808 14.2824C25.5255 14.4148 25.4325 14.5278 25.3133 14.6076C25.1942 14.6873 25.0541 14.7301 24.9108 14.7307Z"
                fill="#3F3F41"
              />
              <path
                d="M13.9706 6.55371L5.21777 15.3357V24.2125C5.21777 24.5994 5.37147 24.9704 5.64505 25.244C5.91862 25.5176 6.28968 25.6713 6.67657 25.6713H11.7824V18.3773H16.1588V25.6713H21.2646C21.6515 25.6713 22.0225 25.5176 22.2961 25.244C22.5697 24.9704 22.7234 24.5994 22.7234 24.2125V15.2846L13.9706 6.55371Z"
                fill="#3F3F41"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M9.09766 5L16.0977 12L9.09766 19"
                stroke="#3F3F46"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="MiddleNavbar__ForwardContainer__Page">
              <div className="MiddleNavbar__MidText">Documents Comptables</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M9.09692 5L16.0969 12L9.09692 19"
                  stroke="#3F3F46"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="Januavary__FileSecond__Container__FileSecond">
        <div className="DocumentFile2__TableActionPage9__ContainerFirst">
          <span className="DocumentFile2__TableActionPage9__Inner">
            <span className="TableActionPage9__Calender">
              <img
                src={word}
                className="DocumentFile2__InnerImage__TableActionPage9"
                alt=""
              />
            </span>
          </span>
          <p className="DocumentFile2__TableActionPAge9__InnerCalenderText">
            FV2023-63
          </p>
        </div>
        <div className="DocumentFile2__TableActionPage9__ContainerFirst">
          <span className="DocumentFile2__TableActionPage9__Inner">
            <span className="TableActionPage9__Calender">
              <img
                src={word}
                className="DocumentFile2__InnerImage__TableActionPage9"
                alt=""
              />
            </span>
          </span>
          <p className="DocumentFile2__TableActionPAge9__InnerCalenderText">
            FV2023-64
          </p>
        </div>
        <div className="DocumentFile2__TableActionPage9__ContainerFirst">
          <span className="DocumentFile2__TableActionPage9__Inner">
            <span className="TableActionPage9__Calender">
              <img
                src={word}
                className="DocumentFile2__InnerImage__TableActionPage9"
                alt=""
              />
            </span>
          </span>
          <p className="DocumentFile2__TableActionPAge9__InnerCalenderText">
            FV2023-65
          </p>
        </div>
      </div>
    </div>
  );
};

export default JuneDocumentFile2;
