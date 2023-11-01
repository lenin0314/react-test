import React, { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import jsonData from "./assets/countries/fossil-fuel-co2-emissions-by-nation_json.json";

const DisplayChartLine = ({ startYear, endYear, countrySelected, selected }) => {
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
    setData(filteredData);
  }, [startYear, endYear, countrySelected]);

  return (
    <div style={{ marginLeft: '500px' }}>
      <h2 style={{ paddingLeft: '300px' }}>Evolution  ot the Total Emissions of all Combustible</h2>
      <LineChart width={1000} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Total" stroke="#2196F3" />
      </LineChart>
    </div>
  );
};

export default DisplayChartLine;
