import React from "react";
import NavBarLogoComponent from "./NavBarLogoComponent/NavBarLogoComponent";
import NavBarMenuComponent from "./NavBarMenuComponent/NavBarMenuComponent";
import NavBarProfileComponent from "./NavBarProfileComponent/NavBarProfileComponent";
import "./NavBarComponent.scss";

const NavBarComponent = () => {
    return (
        <div className="bg-navigationbar">
            <div className="container">
                <NavBarLogoComponent />
                <NavBarMenuComponent />
                <NavBarProfileComponent />
            </div>
        </div>
    );
};

export default NavBarComponent;
