import React from "react";
import HomepPage from "./pages/home/home.component";
import NavBar from "./components/navbar/navbar.component";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="background-image">
      <NavBar></NavBar>
      <Route exact path="/" component={HomepPage} />
    </div>
  );
}

export default App;
