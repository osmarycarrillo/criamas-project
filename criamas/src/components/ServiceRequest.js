import React from 'react';
import Form from './Form';
import Travels from './Travels';

class ServiceRequest extends React.Component {
    render() {
        return (
            <div className="services">
                <h1>Solicitud de servicio</h1>
                <p>Rellena este formulario, obtendras el mejor servicio.</p>
                <Form></Form>
                <Travels></Travels>
            </div>
        )
    }
}

export default ServiceRequest;