import React from "react";
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import NavBarButton from "./NavBarButton/NavBarButton";
import Wrapper from "../Ui/Wrapper";
import "./NavigationBar.scss";

const NavigationBar = () => {
    return (
        <div className="bg-navigationbar">
            <Wrapper>
                <NavBarLogo />
                <NavBarMenu />
                <NavBarButton />
            </Wrapper>
        </div>
    );
};

export default NavigationBar;
