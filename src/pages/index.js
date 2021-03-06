import * as React from "react";
import Homepage from "../components/Homepage/Homepage";
import { GlobalStyle } from "../styles/Global";
import Nav from "../components/Nav/Nav";

const IndexPage = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Homepage />
    </>
  );
};

export default IndexPage;
