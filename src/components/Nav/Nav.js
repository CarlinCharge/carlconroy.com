import React from "react";
import MenuItems from "./MenuItems";
import * as S from "./styles";

const Nav = () => {
  return (
    <S.Header>
      <S.MainText to="/">Carl Conroy</S.MainText>
      <S.Nav className="NavbarItems">
        <S.Ul>
          {MenuItems.map((item, index) => {
            return (
              <S.ListLink to={item.url} key={index}>
                <S.Li className={item.cName}>{item.title}</S.Li>
              </S.ListLink>
            );
          })}
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};

export default Nav;
