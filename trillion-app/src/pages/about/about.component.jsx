import React, { useEffect } from "react";
import "./about.style.scss";

const AboutPage = () => {
  useEffect(() => {
    console.log("------------about init useEffect-----------");
  }, []);

  return (
    <div className="about">
      <h1>About</h1>
    </div>
  );
};

export default AboutPage;
