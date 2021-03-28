import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Resume from "../components/Resume/Resume";
import { GlobalStyle } from "../styles/Global";

const ResumePage = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Resume />
      <Footer />
    </div>
  );
};

export default ResumePage;
