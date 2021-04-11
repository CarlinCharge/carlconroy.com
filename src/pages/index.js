import * as React from "react";
import Homepage from "../components/Homepage/Homepage";
import { GlobalStyle } from "../styles/Global";
import Nav from "../components/Nav/Nav";
import { FormspreeProvider } from "@formspree/react";

const IndexPage = ({ Component, pageProps }) => {
  return (
    <>
      <FormspreeProvider project={"ayawkpp"}>
        <GlobalStyle />
        <Nav />
        <Homepage />
      </FormspreeProvider>
    </>
  );
};

export default IndexPage;
