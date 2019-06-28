import React from 'react';
import FormHome from './FormHome';
import DataContact from './DataContact';

class ContactHome extends React.Component {
    render() {
        return (
            <div className="contact-home">
                <div className="box_center_home">
                    <h3 className="title_contact">CONTACTÁNOS</h3>
                    <p className="bajada_contact">Hacenos una consulta, con gusto te responderemos.</p>
                    <div className="div-con">
                        <FormHome></FormHome>
                        <DataContact></DataContact>
                    </div>
                </div>                
            </div>
        )
    }
}

export default ContactHome;