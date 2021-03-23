import * as React from "react";
import Homepage from "../components/Homepage/Homepage";
import { GlobalStyle } from "../styles/Global";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Homepage />
    </>
  );
};

export default IndexPage;
