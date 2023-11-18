// Table.js

import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar/Navbar";
import axios from "axios";

import EightTableMidNav from "./EightTableMidNav";

const EightTable = () => {
  const [maintableData, setMainTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getAccount"
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
    width: "8vw",

    textAlign: "center",
  };
  const lacempteTdStyle = {
    width: "25vw",
  };

  const creditTdStyle = {
    width: "15vw",
  };

  const actionsTdStyle = {
    width: "18vw",
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
      <EightTableMidNav />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Date</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Journal</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Libellé Ecriture</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Débit</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}> Crédit</span>
            </th>
            <th className="TableNew__RowOne" style={thStyle}>
              <span style={textStyle}>Solde Compte</span>
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
                    <span style={tableData}>{account.journal}</span>
                  </div>
                </td>
                <td style={lacempteTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.liebele}</span>
                  </div>
                </td>
                <td style={creditTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.debit}</span>
                  </div>
                </td>
                <td style={actionsTdStyle}>
                  <div style={tdStyle}>
                    <span style={tableData}>{account.credit}</span>
                  </div>
                </td>
                <td style={SoldetdStyle}>
                  <div style={tdStyle}>
                    <span style={getColorStyle(account.soldecompte)}>
                      {account.soldecompte}
                      debugger
                    </span>
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

export default EightTable;
