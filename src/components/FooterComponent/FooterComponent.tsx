import React from "react";
import Wrapper from "../Ui/Wrapper";
import "./Footer.scss";

function FooterComponent() {
    return (
        <div className="footer">
            <Wrapper className="">
                <p className="footer__writter">© 2021 Planthor.</p>
            </Wrapper>
        </div>
    );
}

export default FooterComponent;
