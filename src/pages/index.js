import * as React from "react";
import Homepage from "../components/Homepage/Homepage";
import Nav from "../components/Nav/Nav";
import { GlobalStyle } from "../styles/Global";
const IndexPage = () => {
  return (
    <>
      <Nav />
      <GlobalStyle />
      <Homepage />
    </>
  );
};

export default IndexPage;
