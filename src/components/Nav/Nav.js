import React from "react";
import MenuItems from "./MenuItems";
import * as S from "./styles";

const Nav = () => {
  return (
    <header>
      <nav className="NavbarItems">
        <S.H1 className="navbar-main">Carl Conroy</S.H1>
        {MenuItems.map((item, index) => {
          return (
            <S.Ul>
              <S.Li key={index} className={item.cName} href={item.url}>
                {item.title}
              </S.Li>
            </S.Ul>
          );
        })}
      </nav>
    </header>
  );
};

export default Nav;
