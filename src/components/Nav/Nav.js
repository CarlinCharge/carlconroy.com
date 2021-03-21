import React from "react";
import MenuItems from "./MenuItems";
import * as S from "./styles";

const Nav = () => {
  return (
    <S.Navbar>
      <div>
        <nav className="NavbarItems">
          <h1 className="navbar-main">Carl Conroy</h1>
          <div className="menu-icon">i</div>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </S.Navbar>
  );
};

export default Nav;
