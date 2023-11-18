import React, { useState } from "react";
import deleteIcon from "../../../images/plan-daction 1.png";
import Navbar from "../../../component/Navbar/Navbar";
import Footer from "../../../components/InnerComponents/footer/Footer";
import SecondTableMidNav from "./SecondTableMidNav";
import imageChecked from "../../../images/checked.png";
import imageUNChecked from "../../../images/unChecked.png";

const SecondTable = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      Journaux: "",
      NuméroPiece: "",
      NuméroCompte: "",
      Libellé: "",
      name: "",
      credit: "",
      debit: "",
    },
    {
      id: 2,
      Journaux: "",
      NuméroPiece: "",
      NuméroCompte: "",
      Libellé: "",
      name: "",
      credit: "",
      debit: "",
    },
    {
      id: 3,
      Journaux: "",
      NuméroPiece: "",
      NuméroCompte: "",
      Libellé: "",
      name: "",
      credit: "",
      debit: "",
    },
    {
      id: 4,
      Journaux: "",
      NuméroPiece: "",
      NuméroCompte: "",
      Libellé: "",
      name: "",
      credit: "",
      debit: "",
    },
    {
      id: 5,
      Journaux: "",
      NuméroPiece: "",
      NuméroCompte: "",
      Libellé: "",
      name: "",
      credit: "",
      debit: "",
    },
    {
      id: 6,
      Journaux: "",
      NuméroPiece: "",
      NuméroCompte: "",
      Libellé: "",
      name: "",
      credit: "",
      debit: "",
    },
    {
      id: 7,
      Journaux: "",
      NuméroPiece: "",
      NuméroCompte: "",
      Libellé: "",
      name: "",
      credit: "",
      debit: "",
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
      <SecondTableMidNav />
      <div className="TableIns__WholeMainTable__Container">
        <div className="TableIns__MainInner__container">
          <div className="TableNew__LeftSide__Container">
            <div
              style={{ marginTop: "3.5vh", width: "80vw", marginLeft: "8%" }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  height: "60vh",
                }}
              >
                <thead>
                  <tr className="TableNew__MainTableHeading">
                    <th className="TableNew__RowOne"></th>

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
                        Date
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
                        Journaux
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
                        Numéro <br /> Pièce
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
                        Numéro <br /> Compte
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
                        Libellé Ecriture
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
                        Débit
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
                        Crédit
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
                        Lettrage
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr
                      key={row.id}
                      className={row.selected ? "selected-row" : ""}
                    >
                      <td>
                        <img
                          src={row.selected ? imageChecked : imageUNChecked}
                          alt=""
                          onClick={() => handleToggleRow(rowIndex)}
                          style={{ cursor: "pointer" }}
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
                            width: "8vw",
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
                            margin: "1px 1px",
                            width: "8vw",
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
                            width: "8vw",
                            height: "6.5vh",
                          }}
                        />
                      </td>

                      <td>
                        <input
                          style={{
                            background: "rgba(0, 74, 173, 0.03)",
                            margin: "1px 1px",
                            width: "12vw",
                            height: "6.5vh",
                          }}
                          type="text"
                          value={row.debit}
                          onChange={(e) => handleChange(e, rowIndex, "debit")}
                        />
                      </td>
                      <td>
                        <input
                          style={{
                            background: "rgba(0, 74, 173, 0.03)",
                            margin: "1px 1px",
                            width: "16vw",
                            height: "6.5vh",
                          }}
                          type="text"
                          value={row.debit}
                          onChange={(e) => handleChange(e, rowIndex, "debit")}
                        />
                      </td>
                      <td>
                        <input
                          style={{
                            background: "rgba(0, 74, 173, 0.03)",
                            margin: "1px 1px",
                            width: "8vw",
                            height: "6.5vh",
                          }}
                          type="text"
                          value={row.debit}
                          onChange={(e) => handleChange(e, rowIndex, "debit")}
                        />
                      </td>
                      <td>
                        <input
                          style={{
                            background: "rgba(0, 74, 173, 0.03)",
                            margin: "1px 1px",
                            width: "8vw",
                            height: "6.5vh",
                          }}
                          type="text"
                          value={row.debit}
                          onChange={(e) => handleChange(e, rowIndex, "debit")}
                        />
                      </td>
                      <td>
                        <input
                          style={{
                            background: "rgba(0, 74, 173, 0.03)",
                            margin: "1px 1px",
                            width: "6vw",
                            height: "6.5vh",
                          }}
                          type="text"
                          value={row.debit}
                          onChange={(e) => handleChange(e, rowIndex, "debit")}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "inline-flex",
              padding: "17px 70px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "50px",
              background: "#FE7A72",
            }}
          >
            <span
              style={{
                color: " #FFF",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
                lineWeight: "normal",
              }}
            >
              Lettrer
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SecondTable;
