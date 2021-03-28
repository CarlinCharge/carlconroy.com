import React from "react";
import * as S from "./styles.js";
import Nav from "../Nav/Nav";
import { GlobalStyle } from "../../styles/Global";
import Footer from "../Footer/Footer";

const PostLayout = ({ children }) => {
  return (
    <S.PostWrapper>
      <GlobalStyle />
      <Nav />
      <S.Wrapper>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
      <S.Wrapper>
        <Footer />
      </S.Wrapper>
    </S.PostWrapper>
  );
};

export default PostLayout;
