import React, { useState } from "react";
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import NavBarButton from "./NavBarButton/NavBarButton";
import Wrapper from "../Ui/Wrapper";
import "./NavigationBar.scss";

const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="bg-navigationbar">
      <Wrapper>
        <NavBarLogo />
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={
              click ? "fi-rr-menu-burger" : "fi fi-rr-user"
            }
          />
        </div>
        <NavBarMenu />
        <NavBarButton />
      </Wrapper>
    </div>
  );
};

export default NavigationBar;
