import React, { useEffect } from "react";
import "./home.style.scss";

const HomePage = () => {
  useEffect(() => {
    console.log("------------home init useEffect-----------");
  }, []);

  return <div className="home"></div>;
};

export default HomePage;
