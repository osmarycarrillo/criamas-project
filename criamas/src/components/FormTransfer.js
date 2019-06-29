import React from 'react';
import Input from './Input';
import Button from './Button';
import '../stylesheet/App.css';

class FormTransfer extends React.Component {
    state = {
        value: '',
        check: false,
        showCheck: false
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    }

    handleCheck = () => {
        this.setState({checked: !this.state.check});
    }

    onClick = () => {
        this.setState({showCheck: true});
    }
    render() {
        return (
            <div className="form-transfer">
                <Input type="text" styleCss="input-transfer" placeholder="Nombre"/>
                <label className="label-transfer">Tipo de perro:
                    <button>
                        <select value={this.state.value} onChange={this.handleChange} className="select">
                            <option value="Beagle">Beagle</option>
                            <option value="Dogo Argetino">Dogo Argetino</option>
                            <option value="Boston Terrier">Boston Terrier</option>
                            <option value="Bulldog Frances">Bulldog Frances</option>
                            <option value="Caniche Mini">Caniche Mini</option>           
                            <option value="Chihuahua">Chihuahua</option>           
                            <option value="Caniche Rojo">Caniche Rojo</option>           
                            <option value="Baset Hound">Baset Hound</option>           
                            <option value="Dogo Burdeo">Dogo Burdeo</option>           
                            <option value="Fox Terrier">Fox Terrier</option>
                            <option value="Gran Danes">Gran Danes</option>    
                        </select>
                        <i class="fas fa-chevron-down"/>
                    </button>
                </label>
                <Input type="text" styleCss="input-transfer" placeholder="Lugar de destino"/>
                <label className="label-transfer">Tipo de traslado: {this.state.check}
                    <button onClick={this.onClick}>
                        <i class="fas fa-chevron-down"/>
                    </button>
                </label>
                <div style={{display: this.state.showCheck ? 'block' : 'none' }}>
                    <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.check}/>
                    <span>Aéreo</span>
                    <hr className="line-form"></hr>
                    <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.check}/>
                    <span>Terrestre</span>
                </div>
                <Input type="text" styleCss="input-transfer" placeholder="Mensaje"/>
                <Button styleCss="button-transfer" name="Enviar"/>
            </div>
        );
    }
}

export default FormTransfer;