import React from 'react';
import FormContac from './FormContact';
import DataContact from './DataContact';

class ContactHome extends React.Component {
    render() {
        return (
            <div className="contact-home">
                <h3>Contactanos</h3>
                <p>Hacenos una consulta, con gusto te responderemos.</p>
                <div className="div-con">
                    <FormContac></FormContac>
                    <DataContact></DataContact>
                </div>
            </div>
        )
    }
}

export default ContactHome;