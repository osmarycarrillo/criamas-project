import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input type="text" value="Nombre"></input>
                    <p>Tipo de perro:
                        <select name="" defaultValue={1}>
                            <option value="1">Caniche</option>
                            <option value="2">Bulldog</option>
                            <option value="3">Mestizo</option>
                        </select>
                    </p>    
                    <input type="text" value="Lugar de destino"></input>
                    <p>Tipo de traslado: <br/>
                        <input type="radio" name="" value="1"/> Avión
                        <input type="radio" name="" value="2"/> Terrestre
                    </p>
                </form>
                {/* <Button></Button> */}
                
            </div>
        )
    }
}

export default Form;