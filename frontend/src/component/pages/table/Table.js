import React, { useState } from "react";

import deleteIcon from "../../../images/image 32.png";

import "./Table.css";
import Navbar from "../../Navbar/Navbar";
import SecondNavbar from "./SecondNavbar/SecondNavbar";
import Footer from "../../../components/InnerComponents/footer/Footer";
import MiddleNavbar from "./middleNavbar/MiddleNavbar";

const Table = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [tableData, setTableData] = useState([
    // Your initial data for the table here
    // Example:
    { field1: "687", field2: "Achat de marchandises", field3: "1000€" },
    { field1: "44,566", field2: "TVA Deductible", field3: "2000€" },
    { field1: "401", field2: "Fournisseurs", field4: "1200€" },
    { field1: "", field2: "", field4: "" },
    { field1: "", field2: "", field3: "" }, // Empty row 1
  ]);

  const handleDeleteRow = (index) => {
    // Copy the current data array
    const updatedData = [...tableData];

    // Remove the row at the specified index
    updatedData.splice(index, 1);

    // Update the state with the modified data
    setTableData(updatedData);
  };
  const isRowEmpty = (rowData) => {
    return Object.values(rowData).every((value) => value === "");
  };

  // Function to check if a row has any data (other than "")
  const isRowWithData = (rowData) => {
    return Object.values(rowData).some((value) => value !== "");
  };

  const formatCurrency = (value, addCurrencySymbol = true) => {
    if (value === "") {
      return "";
    }

    // Remove any existing spaces or commas
    const numberValue = value.replace(/[\s,€]/g, "");

    // Format the number with a space every three digits
    const formattedValue = numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return addCurrencySymbol ? `${formattedValue}€` : formattedValue;
  };

  const handleCellChange = (index, fieldName, value) => {
    // Remove any spaces, commas, and € symbol from the input value
    const cleanedValue = value.replace(/[\s,€]/g, "");

    // Check if the value is a valid number and doesn't exceed 9 digits
    if (!isNaN(cleanedValue) && cleanedValue.length <= 9) {
      // Add a space every three digits
      const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

      // Copy the current data array
      const updatedData = [...tableData];

      // Update the specified cell's value
      updatedData[index][fieldName] = formatCurrency(formattedValue, false);

      // Update the state with the modified data
      setTableData(updatedData);
    }
  };

  const getTotalDebit = () => {
    return tableData.reduce((total, rowData) => {
      const value = rowData.field3
        ? parseFloat(rowData.field3.replace(/[\s,€]/g, "")) || 0
        : 0;
      return total + value;
    }, 0);
  };

  const getTotalCredit = () => {
    return tableData.reduce((total, rowData) => {
      const value = rowData.field4
        ? parseFloat(rowData.field4.replace(/[\s,€]/g, "")) || 0
        : 0;
      return total + value;
    }, 0);
  };

  return (
    <div className="WholeMainTable__Container">
      <Navbar />

      <MiddleNavbar />
      <SecondNavbar />

      <div className="whole__Table__container">
        <div className="table-container">
          <table className="Table__custom-table">
            <thead>
              <tr className="Table__table-heading">
                <th>
                  <span className="table-heading__Text">Compte</span>
                </th>
                <th>
                  <span className="table-heading__Text">
                    Intitulé du compte
                  </span>
                </th>
                <th>
                  <span className="table-heading__Text">Débit</span>
                </th>
                <th>
                  <span className="table-heading__Text">Crédit</span>
                </th>
                <th>
                  <span className="table-heading__Text">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((rowData, index) => (
                <tr className="Table__Main__table__body" key={index}>
                  <td>
                    <input
                      type="text"
                      className="Table__Td__Main__Text"
                      value={rowData.field1}
                      onChange={(e) =>
                        handleCellChange(index, "field1", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="Table__Td__Main__Text"
                      value={rowData.field2}
                      onChange={(e) =>
                        handleCellChange(index, "field2", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="Table__Td__Main__Text"
                      value={
                        rowData.field3 !== undefined
                          ? formatCurrency(rowData.field3)
                          : ""
                      }
                      onChange={(e) =>
                        handleCellChange(
                          index,
                          "field3",
                          e.target.value.replace(/€/g, "").trim()
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="Table__Td__Main__Text"
                      value={
                        rowData.field4 !== undefined
                          ? formatCurrency(rowData.field4)
                          : ""
                      }
                      onChange={(e) =>
                        handleCellChange(
                          index,
                          "field4",
                          e.target.value.replace(/€/g, "").trim()
                        )
                      }
                    />
                  </td>
                  <td
                    style={{
                      backgroundColor: " rgba(239, 241, 255, 0.20)",
                    }}
                  >
                    {isRowWithData(rowData) ? ( // Check if the row has data
                      <img
                        src={deleteIcon}
                        className="table__InnerDeleteIcon"
                        alt=""
                        onClick={() => handleDeleteRow(index)}
                      />
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bottom__three__button">
        <div className="bottom__button__one">
          <span className="bottom__button__text">{getTotalDebit()}€</span>
        </div>

        <div className="bottom__button__one">
          <span className="bottom__button__text">{getTotalCredit()}€</span>
        </div>
        <div className="bottom__button__third">
          <span className="bottom__button__text__three">
            Valider l’écriture
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Table;
