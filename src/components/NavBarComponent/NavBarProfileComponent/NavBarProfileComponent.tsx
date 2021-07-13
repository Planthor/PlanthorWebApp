import React from "react";
import "./NavBarProfileComponent.scss";

const DUMMY_BUTTON = [
    { id: "btn-1", title: "Sign In", cName: "btn-sign-in" },
    { id: "btn-2", title: "Sign In", cName: "btn-sign-up" }
];

function NavBarProfileComponent() {
    return (
        <div className="profile-btn">
            {DUMMY_BUTTON.map(item => {
                return (
                    <button className={item.cName} key={item.id}>
                        {item.title}
                    </button>
                );
            })}
        </div>
    );
}

export default NavBarProfileComponent;
