import React from "react";
import * as S from "./styles";
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
`;

const LogoTwitter = styled(Twitter)`
  width: 77px;
  height: 80px;
  flex-direction: column;
`;
const Social = () => (
  <div>
    <S.SocialLink href="https://github.com/CarlinCharge">
      <LogoGithub />
    </S.SocialLink>
    <S.SocialLink href="https://instagram.com/CarlConroydesign">
      <LogoInstagram />
    </S.SocialLink>
    <S.SocialLink href="https://twitter.com/CarlWearsPrada">
      <LogoTwitter />
    </S.SocialLink>
  </div>
);

export default Social;
