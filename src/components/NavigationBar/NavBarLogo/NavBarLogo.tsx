/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/planthor-hompage-imgs/logo.png";
import { Link } from "react-router-dom";
import "./NavBarLogo.scss";

function NavBarLogo() {
    return (
        <div className="logo-planthor">
            <Link to="/" className="logo-planthor__link">
                <img src={logo} alt="logo-planthor" />
            </Link>
        </div>
    );
}

export default NavBarLogo;
