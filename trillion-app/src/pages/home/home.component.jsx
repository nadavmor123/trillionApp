import React, { useEffect } from "react";
import "./home.style.scss";

const HomePage = () => {
  useEffect(() => {
    console.log("------------home init useEffect-----------");
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
