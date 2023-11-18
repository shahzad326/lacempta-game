import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./calendar.css";

const Calendar = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="calendar">
      <div className="rectangle" />
      <div className="calendar1">
        <div className="calendar2">
          <div className="ellipse" />
          <div className="days">
            <b className="b">4</b>
            <b className="b1">3</b>
            <b className="b2">2</b>
            <b className="b3">1</b>
            <b className="b4">31</b>
            <b className="b5">30</b>
            <b className="b6">29</b>
            <b className="b7">28</b>
            <b className="b8">27</b>
            <b className="b9">26</b>
            <b className="b10">25</b>
            <b className="b11">24</b>
            <b className="b12">23</b>
            <b className="b13">22</b>
            <b className="b14">21</b>
            <b className="b15">20</b>
            <b className="b16">19</b>
            <b className="b17">18</b>
            <b className="b18">17</b>
            <b className="b19">16</b>
            <b className="b20">15</b>
            <b className="b21">14</b>
            <b className="b22">13</b>
            <b className="b23">12</b>
            <b className="b24">11</b>
            <b className="b25">10</b>
            <b className="b26">9</b>
            <b className="b27">8</b>
            <b className="b28">7</b>
            <b className="b29">6</b>
            <b className="b30">5</b>
            <b className="b31">4</b>
            <b className="b32">3</b>
            <b className="b33">2</b>
            <b className="b34">1</b>
          </div>
          <div className="days-of-the-week">
            <b className="di">Di</b>
            <b className="sa">Sa</b>
            <b className="ve">Ve</b>
            <b className="je">Je</b>
            <b className="me">Me</b>
            <b className="ma">Ma</b>
            <b className="lu">Lu</b>
          </div>
        </div>
        <div className="month">
          <div className="december">December</div>
          <div className="november">November</div>
          <div className="october">October</div>
          <b className="septembre">Septembre</b>
          <b className="aot">Août</b>
          <div className="july-2019">
            <div className="rectangle1" />
            <b className="juillet-2020">{`Juillet 2020 `}</b>
          </div>
          <b className="juin">Juin</b>
          <b className="mai">Mai</b>
          <div className="april">April</div>
          <div className="march">March</div>
          <div className="february">February</div>
          <div className="january">January</div>
        </div>
      </div>
      <div className="date-picker">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div>
    </div>
  );
};

export default Calendar;
