// Table.js

import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar/Navbar";
import axios from "axios";
import DisplayingData2MidNav from "./DisplayingData2MidNav";

const DisplayingData2 = () => {
  const [maintableData, setMainTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v3/getAllTable"
        );
        setMainTableData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchTableData();
    console.log(tableData, "TableData");
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "85%",
    marginLeft: "8%",
    marginTop: "2%",
  };

  const thStyle = {
    margin: "10%",
  };

  const tdStyle = {
    textAlign: "center",
    background: "rgba(0, 74, 173, 0.03)",
    padding: "10px",
    height: "8vh",
    margin: "2px",
  };

  const dateTdStyle = {
    width: "6vw",
    textAlign: "center",
  };

  const jounexTdStyle = {
    width: "22vw",
    textAlign: "center",
  };
  const numeroTdStyle = {
    width: "7vw",
    textAlign: "center",
  };
  const journalTdStyle = {
    width: "7vw",
    textAlign: "center",
  };
  const compteTdStyle = {
    width: "7vw",
    textAlign: "center",
  };

  const creditTdStyle = {
    width: "8vw",
    textAlign: "center",
  };

  const actionsTdStyle = {
    width: "12vw",
  };
  const debitTdStyle = {
    width: "8vw",
    textAlign: "center",
  };

  const SoldetdStyle = {
    width: "12vw",
  };

  const subHeadingStyle = {
    padding: "10px",
    textAlign: "left",
    fontWeight: "bold",
  };
  const textStyle = {
    color: "#004AAD",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  const InnerRowStyle = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  };
  const tableData = {
    color: "#000",
    textAlign: "center",
    fontDamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };
  const tableRow = {
    marginTop: "20px",
  };
  const getColorStyle = (value) => ({
    ...tableData,
    color: String(value).includes("-") ? "#F00" : "#0085FF",
  });

  return (
    <div>
      <Navbar />
      <DisplayingData2MidNav />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Date</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Liebelle de l'ecriture</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Numero Piece</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Jounel</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}> Compte</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Instulle du Compte</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Débit</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}> Crédit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <React.Fragment>
            {maintableData.map((account) => (
              <tr key={account._id} style={tableRow}>
                <td style={dateTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>
                      {new Date(account.date).toLocaleDateString()}
                    </span>
                  </div>
                </td>
                <td style={jounexTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.liebelledeerectre}</span>
                  </div>
                </td>
                <td style={numeroTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.numeropiece}</span>
                  </div>
                </td>
                <td style={journalTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.journal}</span>
                  </div>
                </td>
                <td style={compteTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.compte}</span>
                  </div>
                </td>

                <td style={actionsTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.intutleducompte}</span>
                  </div>
                </td>
                <td style={debitTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.debit}</span>
                  </div>
                </td>
                <td style={creditTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.credit}</span>
                  </div>
                </td>
              </tr>
            ))}
          </React.Fragment>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayingData2;
