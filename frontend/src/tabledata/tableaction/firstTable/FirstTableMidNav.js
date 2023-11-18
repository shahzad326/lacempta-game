import React from "react";
import vector from "../../../images/vector.svg";

const FirstTableMidNav = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "11.63px",
          alignItems: "center",
          marginLeft: "8%",
          height: "6vh",
          borderRadius: "69.783",
          marginTop: ".2%",
        }}
      >
        <span
          style={{
            display: "flex",
            padding: "0px 1.5px",
            alignItems: "center",
          }}
        >
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="MiddleNavbar__HomeContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.581 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771567 10.1662 0.771567 9.0134 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714"
                stroke="#130F26"
                stroke-opacity="0.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div style={{ width: "42px", height: "24px" }}>
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
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="MiddleNavbarText">
              <p
                style={{
                  fontSize: "17.6px",
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                \Compte \ Consultation \ Liste
              </p>
            </div>

            <div style={{ marginLeft: "1vw" }}>
              <p
                style={{
                  fontSize: "17.6px",
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                {" "}
                Résultats : Compte 607 - Achats de marchandises - Toutes les
                écritures - Du 01/01/2023 au 31/12/2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTableMidNav;
