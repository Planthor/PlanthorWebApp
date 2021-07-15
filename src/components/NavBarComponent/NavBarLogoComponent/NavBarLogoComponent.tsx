/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/planthor-hompage-imgs/logo.png";
import { Link } from "react-router-dom";
import "./NavBarLogoComponent.scss";

function NavBarLogoComponent() {
    return (
        <div className="logo-planthor">
            <Link to="/" className="logo-planthor__link">
                <img src={logo} />
            </Link>
        </div>
    );
}

export default NavBarLogoComponent;
