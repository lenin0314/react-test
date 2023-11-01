// ParentComponent.js
import React, { useState } from "react";
import FormComponent from "./FormComponent";
import DisplayChart from "./DisplayChart";
import DisplayChartLine from "./DisplayChartLine";

const ParentChart = () => {
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [countrySelected, setCountrySelected] = useState(null);
  // const [selected, setSelected] = useState(null);

  return (
    <div>
      <FormComponent
        setStartYear={setStartYear}
        setEndYear={setEndYear}
        setCountrySelected={setCountrySelected}
        // setSelected={setSelected}
      />
      <DisplayChart
        startYear={startYear}
        endYear={endYear}
        countrySelected={countrySelected}
        // selected={selected}
      />
      <DisplayChartLine
        startYear={startYear}
        endYear={endYear}
        countrySelected={countrySelected}
        // selected={selected} 
      />
    </div>
  );
};

export default ParentChart;
