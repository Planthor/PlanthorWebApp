import React from "react";
import { Link } from "react-router-dom";
import "./NavBarMenuComponent.scss";

const MENU_LIST = [
    { id: "m1", title: "Menu", url: "Menu", cName: "nav-link" },
    { id: "m2", title: "Management", url: "Management", cName: "nav-link" },
    { id: "m3", title: "Discover", url: "Discover", cName: "nav-link" }
];

const NavBarMenuComponent = () => {
    return (
        <nav className="list-menu">
            <ul>
                {MENU_LIST.map(item => {
                    return (
                        <li key={item.id}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBarMenuComponent;
