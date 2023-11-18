import React, { useState, useEffect } from "react";
import deleteIcon from "../../images/reglages 1.png";
import Footer from "../../components/InnerComponents/footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import TableInsMidNav from "./TableInsMidNav/TableInsMidNav";
import TableInsSecNav from "./TableInsSecNav/TableInsSecNav";
import axios from "axios"; // Import axios

const TableTesting = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getAccount"
        );
        setTableData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchTableData();
    console.log(tableData, "TableData");
  }, []);

  const tableHeading = {
    color: "#004AAD",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  };

  const tdStyle = {
    textAlign: "center",
    background: "rgba(0, 74, 173, 0.03)",
    padding: "10px",
    height: "8vh",
    margin: "2px",
  };

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
                      <span style={tableHeading}>Date</span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span style={tableHeading}>Journaux</span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span style={tableHeading}>
                        Numéro <br /> Pièce
                      </span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span style={tableHeading}>
                        Numéro <br /> Compte
                      </span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span style={tableHeading}>Libellé Ecriture</span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span style={tableHeading}>Débit</span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span style={tableHeading}>Crédit</span>
                    </th>
                    <th className="TableNew__RowOne">
                      <span style={tableHeading}>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={row.id}>
                      <td
                        style={{
                          background: "rgba(0, 74, 173, 0.03)",
                          margin: "1px 1px",
                          width: "9vw",
                          height: "6.5vh",
                        }}
                      >
                        {row.date}
                      </td>

                      <td
                        style={{
                          background: "rgba(0, 74, 173, 0.03)",
                          margin: "1px 1px",
                          width: "9vw",
                          height: "6.5vh",
                        }}
                      >
                        {row.compte}
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
                      <td>{row.numeropiece}</td>
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

                      <td style={dateTdStyle}>
                        <div style={tdStyle}>
                          <span style={tableData}>{account.date}</span>
                        </div>
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

export default TableTesting;
