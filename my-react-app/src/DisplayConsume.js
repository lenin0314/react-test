import React, { useEffect, useState } from "react";
import jsonData from "./assets/countries/fossil-fuel-co2-emissions-by-nation_json.json"; // Adjust the path based on the location of GetCountries.js and cat_countries.json

const DisplayConsume = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("CONSUME", jsonData); // This will print the jsonData to the console
    setData(jsonData);
  }, []);

  return <div>{/* Render your data here */}</div>;
};

export default DisplayConsume;
