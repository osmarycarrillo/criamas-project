import React, { Component } from 'react';
import ServiceRequest from './ServiceRequest';
import Contact from './Contact';
import Bstatictras from './Bstatictras';
import Texttras from './Texttras';

class Transfers extends Component {
    render() {
        return (
            <div className="transfers">
                <Bstatictras/>
                <Texttras/>
                <ServiceRequest/>
                <Contact/>
            </div>
        )
    }
}

export default Transfers;

