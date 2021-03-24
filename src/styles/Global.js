import { createGlobalStyle } from "styled-components";
import * as Colors from "./Colors";

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.HomepageFill};
    color: ${Colors.HomepageText};
    height: 100%;
    overflow: hidden;
  }
`;
