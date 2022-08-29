import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FoodX from "./pages/FoodX/FoodX";
import "bootstrap/dist/css/bootstrap.min.css";
// import FaqAccordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FoodX />
      {/* <FaqAccordion /> */}
    </div>
  );
}

export default App;
