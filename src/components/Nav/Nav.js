import React from "react";
import MenuItems from "./MenuItems";
import * as S from "./styles";

const Nav = () => {
  return (
    <header>
      <nav className="NavbarItems">
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
      </nav>
    </header>
  );
};

export default Nav;
