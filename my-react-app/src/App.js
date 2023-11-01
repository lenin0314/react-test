
// import RechartsExample from "./RechartsExample";
// import ChartJsExample from "./ChartJsExample";
import React, { useState, useEffect } from 'react';
// import GetCountries from "./GetCountries"; // Make sure the path is correct
// import DisplayConsume from "./DisplayConsume";
// import DisplayChart from "./DisplayChart";
// import DisplayChartLine from "./DisplayChartLine";
// import FormComponent from "./FormComponent";
import ParentChart from "./ParentChart";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetUsers  from "./GetUsers";
import GetPosts from "./GetPosts";
import MapComponent from "./MapComponent";






const App = () => {

//   return (
//     <div>
//       {/* <h3>Distribution of consumption by fuel type</h3> */}
//       {/* <FormComponent /> */}
//       <ParentChart />
//       {/* <DisplayChartLine /> */}
//       {/* <RechartsExample /> */}
//       {/* <ChartJsExample /> */}
      
//       <GetCountries />
//       {/* <GetUsers /> */}
//       <DisplayConsume />

//       <Router>
//   <NavBar />
//   <Routes>
//     <Route path="/GetUsers" component={GetUsers}  />

//   </Routes>
// </Router>
//     </div>
//   );
// };




return (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/GetUsers" element={<GetUsers />} />
      <Route path="/ParentChart" element={<ParentChart />} />
      <Route path="/GetPosts" element={<GetPosts />} />
      <Route path="/MapComponent" element={<MapComponent />} />
    </Routes>
  </Router>
);
}

export default App;



