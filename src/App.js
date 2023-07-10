import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import MainBlock from "./MainBlock";
import RequestBlock from "./RequestBlock";
import { MultipleMapThrough } from "./MultipleMapThrough";

import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <MainBlock />
      <HomePage categoryIndex={1} />
      <HomePage categoryIndex={0} />
      <RequestBlock />
      <MultipleMapThrough cardInfo={"recommendedItems"} />
      <MultipleMapThrough cardInfo={"extraServices"} />
      <MultipleMapThrough cardInfo={"flegIcons"} />
      <Footer />
    </div>
  );
}

export default App;
