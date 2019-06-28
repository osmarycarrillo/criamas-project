import React, { Component } from 'react';
import ServiceRequest from './ServiceRequest';
import Contact from './Contact';
import Bstatictras from './Bstatictras';
import Texttras from './Texttras';

class Transfers extends Component {
    render() {
        return (
            <div className="transfers">
                <Bstatictras 
                 subtitle='Bienvenido a Traslados' 
                 title="Aquí encontrará información sobre nuestro servicio"
                 bajada='Ante cualquier duda, podemos ayudarte.'
                />
                <Texttras/>
                <ServiceRequest/>
                <Contact/>
            </div>
        )
    }
}

export default Transfers;

