import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <p>Ante cualquier duda, comunicate a nuestro mail y teléfono, estamos para ayudarte.</p>
                <div className="data-div">
                    <p> <i className="fas fa-mobile-alt"></i> Tel | +54 9 11 4975-2537 | +54 9 11 3589-8532</p>
                    <p className="vertical-line">|</p>
                    <p> <i className="fas fa-envelope"></i> Mail | lidiasisi@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default Contact;
