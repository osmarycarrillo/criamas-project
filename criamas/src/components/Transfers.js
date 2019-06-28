import React, { Component } from 'react';
import ServiceRequest from './ServiceRequest';
import Contact from './Contact';
import Footer from './Footer';
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
                <Footer/>
            </div>
        )
    }
}

export default Transfers;

