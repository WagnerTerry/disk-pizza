import React from "react";
import "./Button.scss";

const Button = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.onClick(e);
    };

    const getClass = () => {
        return (
            "personalized-button" +
            (props.size ? " " + props.size : "") +
            (props.link ? " link" : "") +
            (props.className ? " " + props.className : "")
        );
    };

    return (
        <button {...props} link={props.link ? "true" : "false"} className={getClass()} onClick={handleClick}>
            {props.materialIcon && (!props.materialIconPosition || props.materialIconPosition === "before") ? (
                <i className="material-icons btn-icon-before">{props.materialIcon}</i>
            ) : (
                ""
            )}
            {props.children}
            {props.materialIcon && props.materialIconPosition === "after" ? (
                <i className="material-icons btn-icon-after">{props.materialIcon}</i>
            ) : (
                ""
            )}
        </button>
    );
};

export default Button;
