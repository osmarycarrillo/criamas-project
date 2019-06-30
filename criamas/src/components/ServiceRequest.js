import React from 'react';
import FormTransfer from './FormTransfer';
import Travels from './Travels';
import '../stylesheet/App.css';

class ServiceRequest extends React.Component {
    render() {
        return (
            <div className="services">
                <hr className="line-form"/>
                <h3 className="title-serv">Solicitud de servicio</h3>
                <p className='bajada-serv'>Rellena este formulario y obtené el mejor servicio.</p>
                <div className="container-serv">
                    <FormTransfer></FormTransfer>
                    <Travels></Travels>
                </div>
                <hr className="line-form-bottom"/>
            </div>
        )
    }
}

export default ServiceRequest;