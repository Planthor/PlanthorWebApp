import React from "react";
import NavBarLogoComponent from "./NavBarLogoComponent/NavBarLogoComponent";
import NavBarMenuComponent from "./NavBarMenuComponent/NavBarMenuComponent";
import NavBarProfileComponent from "./NavBarProfileComponent/NavBarProfileComponent";
import NavBarRegisterComponent from "./NavBarRegisterComponent/NavBarRegisterComponent";

function NavBarComponent() {
    return (
        <div>
            <h2>Nav Bar Component</h2>
            <NavBarLogoComponent />
            <NavBarMenuComponent />
            <NavBarRegisterComponent />
            <NavBarProfileComponent />
        </div>
    );
}

export default NavBarComponent;
