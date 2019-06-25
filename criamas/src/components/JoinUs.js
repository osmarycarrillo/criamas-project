import React, { Component } from 'react'
import Button from './Button';
import Bulldog from '../img_photos/bulldog_subscribe.png'

class JoinUs extends Component {

  render() {
    return (
      <div className="join">
        <div className="join-box">
          <div className="dog-black">
            <img src={Bulldog} alt="Imagen perro negro" />
          </div>
          <div className="content_text">
            <div className="box_phrase">
              <p className="text_first">Unite a Nuestro</p>
              <b className="text_second">Club!</b>
            </div>
            <div className="box_input">
              <input className="input_join" type="email" placeholder="Ingresa tu email..." required />
            </div>
            <div className="box-button-subscribe">
              <Button name="suscribite" styleCss="button_subscribe" identificator="register_button"></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinUs;