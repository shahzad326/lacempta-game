import React, { useState } from "react";

import charges from "../../../images/archive 1.png";
import products from "../../../images/products.png";
import banque from "../../../images/banque.png";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../../components/InnerComponents/footer/Footer";
import JanMidleNav from "./JanMidleNav";

const Javuavary = () => {
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
      <JanMidleNav />
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
              <img src={charges} style={tableImage} alt="" />
            </span>
          </span>
          <p style={tableText}>Charges </p>
        </div>
        <div style={containerFirst}>
          <span style={containerInner}>
            <span style={calender}>
              <img src={products} style={tableImage} alt="" />
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
        <div style={containerFirst}>
          <span style={containerInner}>
            <span style={calender}>
              <img src={banque} style={tableImage} alt="" />
            </span>
          </span>
          <p style={tableText}>
            Opérations
            <br /> Diverses
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Javuavary;
