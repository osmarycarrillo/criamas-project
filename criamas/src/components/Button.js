import React, { Component } from 'react';

const Button = props => {
    return (
        <div className="box_buttons">
              <button id="register_button" className="signin">{props.name}</button>
              {/* <button id="account" className="login">Mi cuenta</button> */}
        </div>
    );
}

export default Button;


