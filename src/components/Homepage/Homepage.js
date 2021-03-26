import * as React from "react";
import * as S from "./styles";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const theme = "user";
  return (
    <S.Index>
      <S.Title theme={theme}>Projects</S.Title>

      <S.MainText href="https://carlconroydesign.com">
        Carl Conroy Design
      </S.MainText>
      <Footer />
    </S.Index>
  );
};

export default Homepage;
