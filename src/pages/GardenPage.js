import React from "react";
import Nav from "../components/Nav/Nav";
import Garden from "../components/Garden/Garden";
import { GlobalStyle } from "../styles/Global";

const GardenPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Garden />
    </div>
  );
};

export default GardenPage;
