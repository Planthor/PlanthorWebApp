import React from "react";
import "./NavBarMenuComponent.scss";

const MENU_LIST = [
    { id: "m1", title: "Menu", url: "#", cName: "nav-link" },
    { id: "m2", title: "Management", url: "#", cName: "nav-link" },
    { id: "m3", title: "Discover", url: "#", cName: "nav-link" }
];

const NavBarMenuComponent = () => {
    return (
        <nav className="list-menu">
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

export default NavBarMenuComponent;
