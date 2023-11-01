// import React, { useEffect, useState } from "react";
// import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
// import jsonData from "./assets/countries/fossil-fuel-co2-emissions-by-nation_json.json";


// const DisplayChart = () => {
//   const [data, setData] = useState([]);
//   const countrySelected = "GERMANY";
//   const startDate = 1955;
//   const endDate = 20000;

//   useEffect(() => {
//     const germanyData = jsonData.filter((item) => item.Country === countrySelected && item.Year >= startDate && item.Year <= endDate);
//     setData(germanyData);
//   }, []);

//   return (
//     <div style={{ marginLeft: '500px' }}>
//     <h2 style={{ paddingLeft: '300px' }}>Distribution of consumption by fuel type</h2>      <BarChart width={1000} height={300} data={data} >
//         <CartesianGrid stroke="#ccc" />
//         <XAxis dataKey="Year" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="Gas Flaring" fill="#2196F3" />
//         <Bar dataKey="Gas Fuel" fill="#F44236" />
//         <Bar dataKey="Liquid Fuel" fill="#FFCA29" />
//         <Bar dataKey="Solid Fuel" fill="#4CAF50" />
//       </BarChart>
//     </div>
//   );
// };

// export default DisplayChart;


import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import jsonData from "./assets/countries/fossil-fuel-co2-emissions-by-nation_json.json";

const DisplayChart = ({ startYear, endYear, countrySelected, selected }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    console.log('startYear:', startYear);
    console.log('endYear:', endYear);
    console.log('countrySelected:', countrySelected);
  
    const filteredData = jsonData.filter(
      (item) => 
        item.Country === countrySelected && 
        item.Year >= startYear && 
        item.Year <= endYear
    );
  
    // Reset chart before showing alert
    setData([]);
  
    if (filteredData.length === 0) {
      alert('No records found for the selected country and year range.');
    } else {
      setData(filteredData);
    }
  }, [countrySelected, startYear, endYear]);

  return (
    <div style={{ marginLeft: '500px' }}>
      <h2 style={{ paddingLeft: '300px' }}>Distribution of consumption by fuel type</h2>
      <BarChart width={1000} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Gas Flaring" fill="#2196F3" />
        <Bar dataKey="Gas Fuel" fill="#F44236" />
        <Bar dataKey="Liquid Fuel" fill="#FFCA29" />
        <Bar dataKey="Solid Fuel" fill="#4CAF50" />
      </BarChart>
    </div>
  );
};

export default DisplayChart;