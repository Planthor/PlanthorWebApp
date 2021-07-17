import React from "react";
import "./ButtonCustom.scss";

const ButtonCustom = (props: { className?: string; children?: any }) => {
    const classes = "btn " + props.className;
    return <div className={classes}>{props.children}</div>;
};
export default ButtonCustom;
