import React from "react";
import Wrapper from "../../components/Ui/Wrapper";
import "./HomePage.scss";
export default function LandingPage() {
    return (
        <div className="home-page">
            <Wrapper className="">
                <div className="home-page__content">
                    <h2>Lorem isum dolor sit</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc nunc viverra faucibus at molestie placerat.
                    </p>
                </div>
            </Wrapper>
        </div>
    );
}
