import React from "react";
import "./NavBarMenu.scss";

const MENU_LIST = [
  { id: "m1", title: "Menu", url: "Menu" },
  { id: "m2", title: "Management", url: "Management" },
  { id: "m3", title: "Discover", url: "Discover" }
];

const NavBarMenu = () => {
  return (
    <nav className="list-menu" data-testid="navbar-menu">
      <ul>
        {MENU_LIST.map(item => (
          <li key={item.id}>
            <a className="nav-link" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarMenu;
