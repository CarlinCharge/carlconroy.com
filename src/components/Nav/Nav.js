import React from "react";
import MenuItems from "./MenuItems";
import * as S from "./styles";

const Nav = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-main">Carl Conroy</h1>
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
  );
};

export default Nav;
