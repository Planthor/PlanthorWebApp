import React from "react";
import "./Wrapper.scss";

const Wrapper = (props: {
    className: string;
    children:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
}) => {
    const classes = "wrapper " + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
