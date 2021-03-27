import React from "react";
import Nav from "../components/Nav/Nav";
import Resume from "../components/Resume/Resume";
import { GlobalStyle } from "../styles/Global";

const ResumePage = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Resume />
    </div>
  );
};

export default ResumePage;
