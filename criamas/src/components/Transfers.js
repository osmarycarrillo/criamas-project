import React, { Component } from 'react';

import ServiceRequest from './ServiceRequest';
import Contact from './Contact';
import Information from './Information';
import Footer from './Footer';
import Bstatictras from './Bstatictras';
import Texttras from './texttras';

class Transfers extends Component {
    render() {
        return (
            <div className="transfers">
                <Bstatictras></Bstatictras>
                <Texttras></Texttras>
                <ServiceRequest></ServiceRequest>
                <Contact></Contact>
                <ServiceRequest />
                <Contact />
                <Information />
                <Footer />
            </div>
        )
    }
}

export default Transfers;

