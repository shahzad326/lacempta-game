import React, { useState } from "react";

import deleteIcon from "../../../../images/image 32.png";

import image67 from "../../../../images/image 67.png";

import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Footer from "../../../../components/InnerComponents/footer/Footer";

import Navbar from "../../../Navbar/Navbar";
import MiddleNavbarTn from "./MiddleNavbarTN/MiddleNavbarTN";

const TableNew = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: "", credit: "", debit: "" },
    { id: 2, name: "", credit: "", debit: "" },
    { id: 3, name: "", credit: "", debit: "" },
    { id: 4, name: "", credit: "", debit: "" },
    { id: 5, name: "", credit: "", debit: "" },
    { id: 6, name: "", credit: "", debit: "" },
    { id: 7, name: "", credit: "", debit: "" },
  ]);

  const handleChange = (e, rowIndex, columnName) => {
    const newData = [...tableData];
    newData[rowIndex][columnName] = e.target.value;
    setTableData(newData);
  };
  const handleDeleteRow = (rowIndex) => {
    const newData = [...tableData];
    newData.splice(rowIndex, 1);
    setTableData(newData);
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Navbar />

      <div style={{ display: "flex", height: "80vh", width: "100vw" }}>
        <div style={{ width: "62vw" }}>
          <MiddleNavbarTn />
          <SecondNavbar />

          <div
            style={{
              marginTop: "3.5vh",
              width: "50vw",
              marginLeft: "8%",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr className="TableNew__MainTableHeading">
                  <th className="TableNew__RowOne">
                    <span className="TableNew__Text">Compte</span>
                  </th>
                  <th className="TableNew__RowOne">
                    <span className="TableNew__Text">Intitulé du compte</span>
                  </th>
                  <th className="TableNew__RowOne">
                    <span className="TableNew__Text">Débit</span>
                  </th>
                  <th className="TableNew__RowOne">
                    <span className="TableNew__Text">Crédit</span>
                  </th>
                  <th className="TableNew__RowOne">
                    <span className="TableNew__Text">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="text"
                        value={row.name}
                        onChange={(e) => handleChange(e, rowIndex, "name")}
                        style={{
                          background: "rgba(0, 74, 173, 0.03)",
                          margin: "1px 1px",
                          width: "11vw",
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={row.name}
                        onChange={(e) => handleChange(e, rowIndex, "name")}
                        style={{
                          background: "rgba(0, 74, 173, 0.03)",
                          margin: "1px 1px",
                          width: "15vw",
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={row.credit}
                        onChange={(e) => handleChange(e, rowIndex, "credit")}
                        style={{
                          background: "rgba(0, 74, 173, 0.03)",
                          margin: "1px 1px",
                          width: "11vw",
                        }}
                      />
                    </td>
                    <td>
                      <input
                        style={{
                          background: "rgba(0, 74, 173, 0.03)",
                          margin: "1px 1px",
                          width: "11vw",
                        }}
                        type="text"
                        value={row.debit}
                        onChange={(e) => handleChange(e, rowIndex, "debit")}
                      />
                    </td>
                    <td
                      style={{
                        background: "rgba(0, 74, 173, 0.03)",
                        margin: "1px 1px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        width: "8vw",
                        height: "6vh",
                      }}
                    >
                      <img
                        style={{ height: "4vh", cursor: "pointer" }}
                        onClick={() => handleDeleteRow(rowIndex)}
                        src={deleteIcon}
                        alt=""
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginLeft: "70%", display: "flex", marginTop: "1%" }}>
            <div
              style={{
                background: "#FE7A72",
                display: "flex",
                padding: "6%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "45px",
                marginLeft: "10%",
                width: "18vw",
              }}
            >
              <span
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Valider l’écriture
              </span>
            </div>
          </div>
        </div>

        <div className="TableNew__RifthSide__Container">
          <img
            src={image67}
            style={{ height: "88vh", width: "35vw", marginLeft: "2%" }}
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TableNew;
