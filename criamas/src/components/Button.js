import React, { Component } from 'react';

const Button = props => {
    return (
        <div>
            <button id={props.identificator} className={props.style}>{props.name}</button>
        </div>
    );
}

export default Button;


