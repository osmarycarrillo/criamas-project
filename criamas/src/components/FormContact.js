import React from 'react';
import Button from './Button';
import Input from './Input';

class FormContact extends React.Component {
    render() {
        return (
            <div className="form-contact">
                <Input type="text" styleCss="input" placeholder="Nombre"></Input>
                <Input type="text" styleCss="input" placeholder="Email"></Input>
                <Input type="text" styleCss="input" placeholder="Asunto"></Input>
                <Input styleCss="input-msj" type="text" placeholder="Mensaje"></Input>
                <div className="container_contact">
                  <Button name="Enviar" styleCss="button-con"></Button>
                </div>
            </div>
        )
    }
}

export default FormContact;