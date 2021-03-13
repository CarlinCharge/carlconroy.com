import * as React from "react";
import IndexStyles from "../styles/IndexStyles";
import SubTextStyles from "../styles/SubTextStyles";
import TitleStyles from "../styles/TitleStyles";

const IndexPage = () => {
  return (
    <div>
      <IndexStyles>
        <TitleStyles>The Future Location of My Digital Greenhouse</TitleStyles>
      </IndexStyles>
      <SubTextStyles>
        <a href="https://carlconroydesign.com">Carl Conroy Design</a>
      </SubTextStyles>
    </div>
  );
};

export default IndexPage;
