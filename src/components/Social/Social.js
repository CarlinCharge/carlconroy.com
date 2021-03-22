import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";

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

const LogoTwitter = styled(Twitter)`
  width: 77px;
  height: 80px;
  flex-direction: column;
`;
const Social = () => (
  <div>
    <LogoGithub href="https://github.com/CarlinCharge" />
    <LogoInstagram href="https://instagram.com/CarlConroydesign" />
    <LogoTwitter href="https://twitter.com/CarlWearsPrada" />
  </div>
);

export default Social;
