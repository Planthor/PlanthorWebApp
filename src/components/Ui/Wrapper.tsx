import React from "react";
import "./Wrapper.scss";

const Wrapper = (props: { className: string; children: any }) => {
    const classes = "wrapper " + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
