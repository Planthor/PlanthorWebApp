import React, { useState } from "react";
import NavBarLogoComponent from "./NavBarLogoComponent/NavBarLogoComponent";
import NavBarMenuComponent from "./NavBarMenuComponent/NavBarMenuComponent";
import NavBarProfileComponent from "./NavBarProfileComponent/NavBarProfileComponent";
import Wrapper from "../Ui/Wrapper";
import "./NavBarComponent.scss";

const DUMMY_BUTTON = [
    { id: "btn-1", title: "Sign In", cName: "btn-sign-in" },
    { id: "btn-2", title: "Sign Up", cName: "btn-sign-up" }
];

const NavBarComponent = () => {
    return (
        <div className="bg-navigationbar">
            <Wrapper className="">
                <NavBarLogoComponent />
                <NavBarMenuComponent />
                <NavBarProfileComponent />
            </Wrapper>
        </div>
    );
};

export default NavBarComponent;
