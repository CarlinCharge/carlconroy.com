import * as React from "react";
import IndexStyles from "../styles/IndexStyles";
import SubTextStyles from "../styles/SubTextStyles";
import TitleStyles from "../styles/TitleStyles";

const IndexPage = () => {
  return (
    <div>
      <head>
        <meta charset="UTF-8"></meta>
      </head>
      <IndexStyles>
        <TitleStyles>
          The Future Location of My Digital Greenhouse 🌱
        </TitleStyles>
        <SubTextStyles>
          <a href="https://carlconroydesign.com">Carl Conroy Design</a>
        </SubTextStyles>
      </IndexStyles>
    </div>
  );
};

export default IndexPage;
