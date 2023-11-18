import React, { useState } from "react";


import information from "../../../../images/information 1.png";
import Calculator from "../../../../images/calculator 2.png";
import image50 from "../../../../images/image 50.png";

import "./TableActionPage2.css";
import Navbar from "../../../Navbar/Navbar";

const TableActionPage2 = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (rowIndex) => {
    const isSelected = selectedRows.includes(rowIndex);
    if (isSelected) {
      setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };
  const data = [
    [
      <div className="tableData__FrsitRow">
        <input
          type="checkbox"
          onChange={() => handleRowSelect(0)}
          checked={selectedRows.includes(0)}
          className="TableData__InnerCheckBox"
        />
        <span className="Tabledata__InnerText">12/09/23</span>
      </div>,
      "AC",
      "Fac124",
      "607",
      "Fournisseur XXX",
      "4 000€",
      "",
      "4 000€",
      "",
    ],
    [
      <div className="tableData__FrsitRow">
        <input
          type="checkbox"
          onChange={() => handleRowSelect(1)}
          checked={selectedRows.includes(1)}
          className="TableData__InnerCheckBox"
        />
        <span className="Tabledata__InnerText">12/09/23</span>
      </div>,
      "Jane Smith",
      "Account 2",
      "Account 3",
      "Description 2",
      "50",
      "75",
      "",
      "125",
    ],
    [
      <div className="tableData__FrsitRow">
        <input
          type="checkbox"
          onChange={() => handleRowSelect(2)}
          checked={selectedRows.includes(2)}
          className="TableData__InnerCheckBox"
        />
        <span className="Tabledata__InnerText">12/09/23</span>
      </div>,
      "Alice Johnson",
      "Account 3",
      "Account 4",
      "Description 3",
      "200",
      "100",
      "75",
      "",
    ],
    [
      <div className="tableData__FrsitRow">
        <input
          type="checkbox"
          onChange={() => handleRowSelect(3)}
          checked={selectedRows.includes(3)}
          className="TableData__InnerCheckBox"
        />
        <span className="Tabledata__InnerText">12/09/23</span>
      </div>,
      "Bob Williams",
      "Account 4",
      "Account 5",
      "Description 4",
      "75",
      "125",
      "",
      "100",
    ],
    [
      <div className="tableData__FrsitRow">
        <input
          type="checkbox"
          onChange={() => handleRowSelect(4)}
          checked={selectedRows.includes(4)}
          className="TableData__InnerCheckBox"
        />
        <span className="Tabledata__InnerText">12/09/23</span>
      </div>,
      "Eve Anderson",
      "Account 5",
      "Account 1",
      "Description 5",
      "125",
      "50",
      "100",
      "",
    ],
    [
      <div className="tableData__FrsitRow">
        <input
          type="checkbox"
          onChange={() => handleRowSelect(5)}
          checked={selectedRows.includes(5)}
          className="TableData__InnerCheckBox"
        />
        <span className="Tabledata__InnerText">12/09/23</span>
      </div>,
      "Chris Davis",
      "Account 6",
      "Account 1",
      "Description 6",
      "100",
      "",
      "200",
      "",
    ],
  ];

  return (
    <div>
      <Navbar />

      <div className="Table__MiddleNavbar__tableActionPage">
        <span className="MiddleNavbar__Arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
          >
            <path
              d="M7.14648 21.4612H32.3683"
              stroke="#130F26"
              stroke-width="1.68145"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3193 31.5909L7.14648 21.4619L17.3193 11.3311"
              stroke="#130F26"
              stroke-width="1.68145"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div className="MiddleNavbar__Container__TableActionPage">
          <div className="MiddleNavbar__HomeContainer__TableActionPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M24.9108 14.7307C24.8148 14.7313 24.7196 14.7129 24.6307 14.6766C24.5419 14.6403 24.461 14.5868 24.3929 14.5192L13.9697 4.08879L3.54662 14.5192C3.40708 14.6387 3.22759 14.7011 3.04402 14.6941C2.86045 14.687 2.68631 14.6109 2.55641 14.481C2.42651 14.3511 2.35041 14.1769 2.34332 13.9934C2.33623 13.8098 2.39867 13.6303 2.51816 13.4908L13.4592 2.54975C13.5958 2.4139 13.7807 2.33765 13.9734 2.33765C14.1661 2.33765 14.351 2.4139 14.4876 2.54975L25.4286 13.4908C25.529 13.5932 25.597 13.7229 25.624 13.8637C25.6511 14.0045 25.6361 14.1501 25.5808 14.2824C25.5255 14.4148 25.4325 14.5278 25.3133 14.6076C25.1942 14.6873 25.0541 14.7301 24.9108 14.7307Z"
                fill="#3F3F41"
              />
              <path
                d="M13.9706 6.55371L5.21777 15.3357V24.2125C5.21777 24.5994 5.37147 24.9704 5.64505 25.244C5.91862 25.5176 6.28968 25.6713 6.67657 25.6713H11.7824V18.3773H16.1588V25.6713H21.2646C21.6515 25.6713 22.0225 25.5176 22.2961 25.244C22.5697 24.9704 22.7234 24.5994 22.7234 24.2125V15.2846L13.9706 6.55371Z"
                fill="#3F3F41"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M9.09766 5L16.0977 12L9.09766 19"
                stroke="#3F3F46"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="MiddleNavbar__ForwardContainer__Page">
              <div className="MiddleNavbar__MidText">Compte</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M9.09766 5L16.0977 12L9.09766 19"
                  stroke="#3F3F46"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="MiddleNavbar__LastText">Lettrage </div>
              <div className="MiddleNavbar__LastText"> manuelle </div>
            </div>

            <div className="MiddleNavbar__ForwardContainer__Page">
              <div className="MiddleNavbar__MidText">
                Résultats : Compte 401 - Fournisseurs - Toutes les écritures -
                Du 01/01/2023 au 31/12/2023
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="TableActionPage__TableContainer w-full h-[300px] overflow-hidden">
      <div className=" max-h-[300px] ">
  <table className="TableActionPage__MainTable w-full">
    <thead>
      <tr className="TableActionPage__TableHeadings">
        <th className="TableActionPage__Heading-1">
          <span className="TableActionPage__InnerText">
            Date Comptable
          </span>
        </th>
        <th className="TableActionPage__Heading-2">
          <span className="TableActionPage__InnerText">Journaux</span>
        </th>
        <th className="TableActionPage__Heading-3">
          {" "}
          <span className="TableActionPage__InnerText">N° Pièce</span>
        </th>
        <th className="TableActionPage__Heading-4">
          {" "}
          <span className="TableActionPage__InnerText">N° Compte</span>
        </th>
        <th className="TableActionPage__Heading-5">
          {" "}
          <span className="TableActionPage__InnerText">
            Libellé Ecriture
          </span>
        </th>
        <th className="TableActionPage__Heading-6">
          {" "}
          <span className="TableActionPage__InnerText">Débit</span>
        </th>
        <th className="TableActionPage__Heading-7">
          {" "}
          <span className="TableActionPage__InnerText">Crédit</span>
        </th>
        <th className="TableActionPage__Heading-8">
          {" "}
          <span className="TableActionPage__InnerText">Solde</span>
        </th>
        <th className="TableActionPage__Heading-9">
          {" "}
          <span className="TableActionPage__InnerText">Actions</span>
        </th>
      </tr>
    </thead>
    <tbody className=" maxh-[300px] overflow-y-scroll">
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className={`TableActionPage__Data-${
                cellIndex + 1
              } fixed-width styled-data`}
            >
              {cellIndex === 8 ? ( // Check if it's the last column
                <img src={image50} alt="Your Alt Text" />
              ) : (
                cell
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  </div>
</div>

      <div className="TableActionPage__ButtonContainer">
        <div className="TableActionPage__InnerContainer">
          <span className="TableInnerPage__text">Lettrer</span>
        </div>
      </div>

      <div className="TableActionPage__Footer">
        <img src={information} alt="" />
        <img src={Calculator} alt="" />
      </div>
    </div>
  );
};

export default TableActionPage2;
