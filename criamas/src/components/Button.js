import React from 'react';
// import { Link } from "react-router-dom";
import '../stylesheet/App.css';

const Button = props => {
    
    return (
        <div>
            <button id={props.identificator} className={props.styleCss}>
                {/* <Link to={props.url}>{props.name}</Link> */}
                {props.name}
            </button>
        </div>
    );
}

export default Button;


