import * as React from "react";
import * as S from "./styles";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Homepage = () => {
  return (
    <S.Index>
      <S.Title>The Future Location of My Digital Greenhouse 🌱</S.Title>
      <S.MainText href="https://carlconroydesign.com">
        Carl Conroy Design
      </S.MainText>
      <Projects />
      <Contact />
      <Footer />
    </S.Index>
  );
};

export default Homepage;
