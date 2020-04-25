import React from "react";
import HomepPage from "./pages/home/home.component";
import AboutPage from "./pages/about/about.component";
import NavBar from "./components/navbar/navbar.component";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="background-image">
      <NavBar></NavBar>
      <Route exact path="/home" component={HomepPage} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
