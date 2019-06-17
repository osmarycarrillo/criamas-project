import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input className="form-style" type="text" value="Nombre"></input>
                    <p className="form-style">Tipo de perro:
                        <button className="button-form"> 
                            <i class="fas fa-chevron-down">
                                {/* <select name="" defaultValue={1}>
                                    <option value="1">Caniche</option>
                                    <option value="2">Bulldog</option>
                                    <option value="3">Mestizo</option>
                                </select> */}
                            </i>
                        </button>
                    </p>    
                    <input className="form-style" type="text" value="Lugar de destino"></input>
                    <p className="form-style">Tipo de traslado: <br/>
                        <button className="button-form">
                            <i class="fas fa-chevron-down">
                            {/* <input type="radio" name="" value="1"/> Avión
                            <p className="line-form"></p>
                            <input type="radio" name="" value="2"/> Terrestre */}
                            </i>
                        </button>
                    </p>
                    <input className="form-style message" type="text" value="Mensaje"></input>
                </form>
                {/* <Button></Button> */}
                
            </div>
        )
    }
}

export default Form;