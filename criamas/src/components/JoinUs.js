import React, { Component } from 'react'
import Button from './Button';


class JoinUs extends Component {

    render() {
        return (
        <div className="join">
            <div className="join-box">
            <div className="dog-black">
                <img src="" alt="Imagen perro negro"/>
            </div>
            <div>
                <p>Unite a Nuestro</p>
                <p>Club !!!</p>
                <p className="bold"></p>
            </div>
            <input type="email" value="Ingresa tu email..." required/>
            <Button name="suscribite" style="signin" identificator="register_button"></Button>
        </div>
        </div>
        )
    }
}

export default JoinUs;