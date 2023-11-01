import React, { useEffect, useState } from "react";
import jsonData from "./assets/countries/cat_countries.json"; // Adjust the path based on the location of GetCountries.js and cat_countries.json

const GetCountries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log('COUNTRIES', jsonData); // This will print the jsonData to the console
    setData(jsonData);
  }, []);

  return <div>{/* Render your data here */}</div>;
};

export default GetCountries;