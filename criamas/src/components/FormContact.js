import React from 'react';
import Button from './Button';

class FormContact extends React.Component {
    render() {
        return (
            <div className="form-contact">
                <input type="text" value="Nombre"></input>
                <input type="text" value="Email"></input>
                <input type="text" value="Asunto"></input>
                <input className="input-msj" type="text" value="Mensaje"></input>
                <Button name="Enviar" style="button-con"></Button>
            </div>
        )
    }
}

export default FormContact;