import React from "react";
import "./styles/button.css"

function Button(props){
    return <button className="button__reservation">{props.title}</button>
}

export default Button;