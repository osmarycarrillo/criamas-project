import React from 'react';
import Button from './Button';
import Input from './Input';


class FormHome extends React.Component {
    
    render() {
        
        return (
            <div className="form-contact">
                <Input type="text" styleCss="input" placeholder="Nombre" id="name"></Input>

                <Input type="text" styleCss="input" placeholder="Email" id="mail"></Input>

                <Input type="text" styleCss="input" placeholder="Asunto" id="about"></Input>

                <Input styleCss="input-msj" type="text" placeholder="Mensaje" id="msj"></Input>

                <div className="container_contact">
                    <Button name="Enviar" styleCss="button-con"></Button>
                </div>
            </div>
        )
    }
}

export default FormHome;