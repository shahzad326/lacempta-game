import React, { useState } from "react";

import banque from "../../../images/banque.png";

import Navbar from "../../Navbar/Navbar";
import AprilMidNav from "./AprilMidNav";

const April = () => {
  const containerFirst = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "9.348px",
  };
  const containerInner = {
    width: "12vw",
    height: "25vh",
    backgroundColor: "rgba(30, 63, 183, 0.15)",
    borderRadius: "50%",
  };
  const calender = {
    textAlign: "center",
    alignItems: "center",
  };
  const tableImage = {
    position: "absolute",
    width: "8vw",
    height: "18vh",
    marginTop: "1.5%",
    marginLeft: "2%",
    textAlign: "center",
  };
  const tableText = {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "18.695px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  };

  return (
    <div>
      <Navbar />
      <AprilMidNav />
      <div
        style={{
          padding: "10px",
          gap: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "73vh",
        }}
      >
        <div style={containerFirst}>
          <span style={containerInner}>
            <span style={calender}>
              <img src={banque} style={tableImage} alt="" />
            </span>
          </span>
          <p style={tableText}>Charges </p>
        </div>
        <div style={containerFirst}>
          <span style={containerInner}>
            <span style={calender}>
              <img src={banque} style={tableImage} alt="" />
            </span>
          </span>
          <p style={tableText}>Produits</p>
        </div>
        <div style={containerFirst}>
          <span style={containerInner}>
            <span style={calender}>
              <img src={banque} style={tableImage} alt="" />
            </span>
          </span>
          <p style={tableText}>Banque</p>
        </div>
      </div>
    </div>
  );
};

export default April;
