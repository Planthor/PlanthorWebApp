import React from "react";
import "./NavBarButton.scss";
import ButtonCustom from "../../ButtonCustom/ButtonCustom";

const NavBarButton = () => {
    return (
        <div className="profile-btn">
            <ButtonCustom className="btn-sign-in">Sign In</ButtonCustom>
            <ButtonCustom className="btn-sign-up">Sign Up</ButtonCustom>
        </div>
    );
};

export default NavBarButton;
