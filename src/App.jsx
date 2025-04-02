// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import TabNavigations from './components/TabNavigations'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //      <TabNavigations />
// //     </>
// //   )
// // }

// // export default App
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PurchaseVehicle from "./pages/PurchaseVehicle";
// import Service from "./pages/Service";
// // import TabNavigations from './components/TabNavigations'
// import Home from "./pages/Home";

// const App = () => {
//   return (
//     <Router> 
//       <Routes> 
//         <Route path="/" element={<Home />} />
//         <Route path="/purchase" element={<PurchaseVehicle />} />
//         <Route path="/service" element={<Service />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabNavigation from "./components/TabNavigations";
import PurchaseVehicle from "./pages/PurchaseVehicle";
import Service from "./pages/Service";
import Petrol from "./pages/Petrol";
import SellVehicle from "./pages/SellVehicle";
import VehicleData from "./pages/VehicleData";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollTop";
const PageWrapper = styled.div`
  margin-top: 80px; /* Navbar ke neeche content dikhane ke liye */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <TabNavigation />
      <PageWrapper>
      <Routes>
        <Route path="/" element={<PurchaseVehicle />} />
        <Route path="/service" element={<Service />} />
        <Route path="/petrol" element={<Petrol />} />
        <Route path="/sell" element={<SellVehicle />} />
        <Route path="/vehicle-data" element={<VehicleData />} />
      </Routes>
      </PageWrapper>
     
    </Router>
  );
};

export default App;
