import React from 'react';
import Form from './Form';
import Travels from './Travels';

class ServiceRequest extends React.Component {
    render() {
        return (
            <div className="services">
                <p className="line-form"></p>
                <h3 className="title-serv">Solicitud de servicio</h3>
                <p>Rellena este formulario, obtendras el mejor servicio.</p>
                <div className="container-serv">
                    <Form></Form>
                    <Travels></Travels>
                </div>
                <p className="line-form"></p>
            </div>
        )
    }
}

export default ServiceRequest;