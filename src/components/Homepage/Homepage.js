import * as React from "react";
import IndexStyles from "../../styles/IndexStyles";
import SubTextStyles from "../../styles/SubTextStyles";
import TitleStyles from "../../styles/TitleStyles";

const Homepage = () => {
  return (
    <IndexStyles>
      <TitleStyles>The Future Location of My Digital Greenhouse 🌱</TitleStyles>
      <SubTextStyles href="https://carlconroydesign.com">
        Carl Conroy Design
      </SubTextStyles>
    </IndexStyles>
  );
};

export default Homepage;
