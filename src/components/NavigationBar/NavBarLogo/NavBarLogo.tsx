/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/planthor-hompage-imgs/logo.png";
import "./NavBarLogo.scss";

const NavBarLogo = () => {
    return (
        <div className="logo-planthor" data-testid="logo-planthor">
            <a href="#" className="logo-planthor__link">
                <img src={logo} alt="logo-planthor" />
            </a>
        </div>
    );
};

export default NavBarLogo;
