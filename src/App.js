import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Links from "./Components/Links";
import Photo from "./Components/Photo";
import Data from "./Components/Data";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const App = props => {
  return (
    <BrowserRouter>
      <div className="mai">
        <div className="app-wrapper">
          <Header />
          <Links />
          <Photo />
          <Data />
          <Content />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
