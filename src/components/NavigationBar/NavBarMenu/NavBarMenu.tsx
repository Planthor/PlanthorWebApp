import React from "react";
import "./NavBarMenu.scss";

const MENU_LIST = [
    { id: "m1", title: "Menu", url: "Menu", cName: "nav-link" },
    { id: "m2", title: "Management", url: "Management", cName: "nav-link" },
    { id: "m3", title: "Discover", url: "Discover", cName: "nav-link" }
];

const NavBarMenu = () => {
    return (
        <nav className="list-menu" data-testid="navbar-menu">
            <ul>
                {MENU_LIST.map(item => {
                    return (
                        <li key={item.id}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBarMenu;
