import React from 'react';
import Button from './Button';

class FormContact extends React.Component {
    render() {
        return (
            <div className="form-contact">
                <label htmlFor="Nombre">Nombre:</label>
                <input type="text" name="Nombre" ></input>
                <label htmlFor="Email">Email:</label>
                <input type="text" name="Email"></input>
                <label htmlFor="Asunto">Asunto:</label>
                <input type="text" name="Asunto"></input>
                <label htmlFor="Mensaje">Mensaje:</label>
                <input className="input-msj" type="text" name="Mensaje"></input>
                <div className="container_contact">
                  <Button name="Enviar" styleCss="button-con"></Button>
                </div>
            </div>
        )
    }
}

export default FormContact;