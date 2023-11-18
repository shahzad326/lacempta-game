import React, { useState } from "react";
import deleteIcon from "../../images/reglages 1.png";
import Footer from "../../components/InnerComponents/footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import TableInsMidNav from "./TableInsMidNav/TableInsMidNav";
import TableInsSecNav from "./TableInsSecNav/TableInsSecNav";

const TableInertion = () => {
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
  return (
    <div>
      <Navbar />
      <TableInsMidNav />
      <TableInsSecNav />
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
                  height: "50vh",
                }}
              >
                <thead>
                  <tr className="TableNew__MainTableHeading">
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
                        Actions
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
                            margin: "1px 1px",
                            width: "9vw",
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
                            width: "11vw",
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
                            width: "9vw",
                            height: "6.5vh",
                          }}
                        />
                      </td>
                      <td>
                        <input
                          style={{
                            background: "rgba(0, 74, 173, 0.03)",
                            margin: "1px 1px",
                            width: "9vw",
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
                            width: "18vw",
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
                            width: "9vw",
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
                            width: "9vw",
                            height: "6.5vh",
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
                          height: "6.5vh",
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
          </div>
        </div>

        <div style={{ marginLeft: "70%", display: "flex", marginTop: "1%" }}>
          <div
            style={{
              background: "#FE7A72",
              display: "flex",
              padding: "3%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "45px",
              width: "22vw",
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
              Faire une nouvelle recherche
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TableInertion;
