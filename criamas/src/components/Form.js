import React from 'react';
import Button from './Button';

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input className="form-style" type="text" value="Nombre"></input>
                    <div className="form-style">
                        <div className="div-p">
                            <p className="">Tipo de perro:</p>
                        </div>
                        <div className="div-button">
                            <button className="button-form"> 
                                <i class="fas fa-chevron-down">
                                    {/* <select className="select-form" defaultValue={1}>
                                        <option value="1">Caniche</option>
                                        <option value="2">Bulldog</option>
                                        <option value="3">Mestizo</option>
                                    </select> */}
                                </i>
                            </button>
                        </div>     
                    </div>  
                    <input className="form-style" type="text" value="Lugar de destino"></input>
                    <div className="form-style">
                        <div className="div-p">
                            <p className="">Tipo de traslado:</p>
                        </div>
                        <div className="div-button">
                            <button className="button-form">
                                <i class="fas fa-chevron-down">
                                {/* <input type="radio" name="" value="1"/> Avión
                                <p className="line-form"></p>
                                <input type="radio" name="" value="2"/> Terrestre */}
                                </i>
                            </button>
                        </div> 
                    </div>
                    <input className="form-style message" type="text" value="Mensaje"></input>
                    <Button className="buttonTrans" name="Enviar"/>
                </form>     
            </div>
        )
    }
}

export default Form;