import React from 'react';
import Form from './Form';
import Calendar from './Calendar';

class ServiceRequest extends React.Component {
    render() {
        return (
            <div className="services">
                <h1>Solicitud de servicio</h1>
                <p>Rellena este formulario, obtendras el mejor servicio.</p>
                <Form></Form>
                <Calendar></Calendar>
            </div>
        )
    }
}

export default ServiceRequest;