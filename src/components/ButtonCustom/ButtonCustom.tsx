import React from "react";

const ButtonCustom = (props: { cName: any; id: any; title: any }) => {
    return (
        <div className={props.cName} key={props.id}>
            {props.title}
        </div>
    );
};
export default ButtonCustom;
