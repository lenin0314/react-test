import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import data from "./assets/countries/cat_countries.json"; // Adjust the path based on the location of GetCountries.js and cat_countries.json

export const FormComponent = ({ setStartYear, setEndYear, setCountrySelected, setExternalSelected }) => {
  const [startYear, setLocalStartYear] = useState(null);
  const [endYear, setLocalEndYear] = useState(null);
  const [countrySelected, setLocalCountrySelected] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (startYear && endYear && countrySelected) {
      setStartYear(startYear.getFullYear());
      setEndYear(endYear.getFullYear());
      setCountrySelected(countrySelected);
  
      // // Clear form controls
      // setLocalStartYear(null);
      // setLocalEndYear(null);
      // setLocalCountrySelected("");
    } else {
      console.error('Start year or end year is null or undefined');
      alert('Start year or end year or Country is not selected');
    }
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#2196F3",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "30px",
    width: "350px",
    boxSizing: "border-box",
    float: "left",
    marginLeft: "100px",
    marginTop: "55px",
    backgroundColor: "#f8f9fa", // light gray
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ textAlign: "center" }}>Filter Section</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label>Start Year:</label>
          <DatePicker
            selected={startYear}
            onChange={(date) => setLocalStartYear(date)}
            showYearPicker
            dateFormat="yyyy"
          />
        </div>
        <div>
          <label>End Year:</label>
          <DatePicker
            selected={endYear}
            onChange={(date) => setLocalEndYear(date)}
            showYearPicker
            dateFormat="yyyy"
          />
        </div>
        <div>
          <label>Country:</label>
          <select
            value={countrySelected}
            onChange={(e) => setLocalCountrySelected(e.target.value)}
            style={{ width: "200px" }}
          >
            <option value="" disabled hidden>Select a country</option>
            {data.countries.map((item) => (
              <option key={item.country} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={buttonStyle}>
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
