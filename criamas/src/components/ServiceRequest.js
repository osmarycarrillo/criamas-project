import React from 'react';
import Form from './Form';
import Travels from './Travels';

class ServiceRequest extends React.Component {
    render() {
        return (
            <div className="services">
                <p className="line-form"></p>
                <h1 className="title-serv">Solicitud de servicio</h1>
                <p>Rellena este formulario, obtendras el mejor servicio.</p>
                <div className="container-serv">
                    <Form></Form>
                    <Travels></Travels>
                </div>
            </div>
        )
    }
}

export default ServiceRequest;