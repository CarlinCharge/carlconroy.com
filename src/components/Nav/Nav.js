import React from "react";
import MenuItems from "./MenuItems";
import * as S from "./styles";

const Nav = () => {
  return (
    <S.Header>
      <S.MainText href="/">Carl Conroy</S.MainText>
      <S.Nav className="NavbarItems">
        <S.Ul>
          {MenuItems.map((item, index) => {
            return (
              <S.ListLink href={item.url}>
                <S.Li key={index} className={item.cName}>
                  {item.title}
                </S.Li>
              </S.ListLink>
            );
          })}
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
};

export default Nav;
