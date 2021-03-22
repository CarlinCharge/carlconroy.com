import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";

const LogoGithub = styled(Github)`
  width: 77px;
  height: 80px;
  flex-direction: column;
`;

const LogoInstagram = styled(Instagram)`
  flex-direction: column;
  width: 77px;
  height: 80px;
  float: right;
`;
const Social = () => (
  <div>
    <LogoGithub href="https://github.com/CarlinCharge" />
    <LogoInstagram href="https://instagram.com/CarlConroydesign" />
  </div>
);

export default Social;
