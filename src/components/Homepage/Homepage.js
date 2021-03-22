import * as React from "react";
import * as S from "./styles";
import insta from "../../images/insta.png";
import Twitter from "../../images/Twitter.png";

const Homepage = () => {
  const theme = "user";
  return (
    <S.Index>
      <S.Title theme={theme}>
        The Future Location of My Digital Greenhouse 🌱
      </S.Title>

      <S.MainText href="https://carlconroydesign.com">
        Carl Conroy Design
      </S.MainText>
      <S.SocialWrapper>
        <S.SocialIcons
          src={insta}
          href="https://www.instagram.com/carlconroydesign/"
          alt="insta"
        />

        <S.SocialIcons
          src={Twitter}
          href="https://twitter.com/CARLWEARSPRADA"
          alt="twitter"
        />
      </S.SocialWrapper>
    </S.Index>
  );
};

export default Homepage;
