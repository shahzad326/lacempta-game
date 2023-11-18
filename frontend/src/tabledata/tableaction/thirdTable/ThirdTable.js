import React, { useState } from "react";

import Navbar from "../../../component/Navbar/Navbar";
import Footer from "../../../components/InnerComponents/footer/Footer";
import ThirdTableMidNav from "./ThirdTableMidNav";
import imageChecked from "../../../images/checked.png";
import imageUNChecked from "../../../images/unChecked.png";

const SecondTable = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
    {
      id: 1,
      Journaux: "",
    },
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
  const handleToggleRow = (rowIndex) => {
    const newData = [...tableData];
    newData[rowIndex].selected = !newData[rowIndex].selected;
    setTableData(newData);
  };
  return (
    <div>
      <Navbar />
      <ThirdTableMidNav />
      <div className="TableIns__WholeMainTable__Container">
        <div className="TableIns__MainInner__container">
          <div className="TableNew__LeftSide__Container">
            <div
              style={{ marginTop: "3.5vh", width: "30vw", marginLeft: "8%" }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  height: "70vh",
                }}
              >
                <thead>
                  <tr className="TableNew__MainTableHeading">
                    <th>
                      <span
                        style={{
                          color: "#004AAD",
                          textAlign: "center",
                          fontFamily: "Poppins",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "normal",
                        }}
                      >
                        Numéro de compte
                      </span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span
                        style={{
                          color: "#004AAD",
                          textAlign: "center",
                          fontFamily: "Poppins",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "normal",
                        }}
                      >
                        Libellé des comptes
                      </span>
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
                            width: "15vw",
                            height: "6.5vh",
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

                            width: "22vw",
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SecondTable;
