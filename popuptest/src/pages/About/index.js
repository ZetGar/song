import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>Nested Route</p>
      <Outlet />
    </div>
  );
};

export default About;
