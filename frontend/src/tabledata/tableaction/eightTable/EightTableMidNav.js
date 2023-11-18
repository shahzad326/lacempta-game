import React from "react";

const EightTableMidNav = () => {
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
          style={{ display: "flex", padding: "0px 1.5%", alignItems: "center" }}
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
        <div
          style={{ display: "flex", padding: "0px 10px", alignItems: "center" }}
        >
          <div className="MiddleNavbar__HomeContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M24.9108 14.7306C24.8148 14.7312 24.7196 14.7128 24.6307 14.6765C24.5419 14.6402 24.461 14.5867 24.3929 14.5191L13.9697 4.08866L3.54662 14.5191C3.40708 14.6386 3.22759 14.701 3.04402 14.6939C2.86045 14.6868 2.68631 14.6107 2.55641 14.4808C2.42651 14.3509 2.35041 14.1768 2.34332 13.9932C2.33623 13.8097 2.39867 13.6302 2.51816 13.4906L13.4592 2.54963C13.5958 2.41378 13.7807 2.33752 13.9734 2.33752C14.1661 2.33752 14.351 2.41378 14.4876 2.54963L25.4286 13.4906C25.529 13.593 25.597 13.7227 25.624 13.8635C25.6511 14.0044 25.6361 14.15 25.5808 14.2823C25.5255 14.4146 25.4325 14.5277 25.3133 14.6074C25.1942 14.6872 25.0541 14.73 24.9108 14.7306Z"
                fill="#3F3F41"
              />
              <path
                d="M13.9706 6.55377L5.21777 15.3358V24.2126C5.21777 24.5994 5.37147 24.9705 5.64505 25.2441C5.91862 25.5177 6.28968 25.6714 6.67657 25.6714H11.7824V18.3773H16.1588V25.6714H21.2646C21.6515 25.6714 22.0225 25.5177 22.2961 25.2441C22.5697 24.9705 22.7234 24.5994 22.7234 24.2126V15.2847L13.9706 6.55377Z"
                fill="#3F3F41"
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
              <p className="MiddleNavbarInnerText">Clôture</p>
            </div>

            <div>
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

            <div>
              <p className="MiddleNavbarInnerText"> Grand Livre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightTableMidNav;
