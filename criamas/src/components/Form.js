import React from 'react';
import Input from './Input';
import Button from './Button';

class Form extends React.Component {
    render() {
        return (
            <div className="form-contact">
                    <Input type="text" styleCss="input" placeholder="Nombre"/>
                    <div styleCss="input">
                        <div className="div-p">
                            <p className="">Tipo de perro:</p>
                        </div>
                        <div className="div-button">
                            <Button className="button-form"> 
                                <i class="fas fa-chevron-down">
                                    <select className="select-form" defaultValue={1}>
                                        <option value="1">Caniche</option>
                                        <option value="2">Bulldog</option>
                                        <option value="3">Mestizo</option>
                                    </select>
                                </i>
                            </Button>
                        </div>     
                    </div>
                    <Input type="text" styleCss="input" placeholder="Lugar de destino"/>
                    <div styleCss="input">
                        <div className="div-p">
                            <p className="">Tipo de traslado:</p>
                        </div>
                        <div className="div-button">
                            <Button styleCss="button-form">
                                <i class="fas fa-chevron-down">
                                <input type="radio" name="" value="1"/> Avión
                                <p className="line-form"></p>
                                <input type="radio" name="" value="2"/> Terrestre
                                </i>
                            </Button>
                        </div> 
                    </div>
                    <textarea type="text" styleCss="input-msj" placeholder="Mensaje" required="" maxLength="140"/>
                    <Button styleCss="buttonTrans" name="Enviar"/>
            </div>
        );
    }
}

export default Form;