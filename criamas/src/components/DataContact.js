import React from 'react';

class DataContact extends React.Component {
    render() {
        return (
            <div className="data-contact">
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Dirección</p>
                    <p className="line-con"></p>
                    <p>Nicaragua 5596</p> 
                </div>
                <div>
                    <i className="fas fa-mobile-alt"></i>
                    <p>Tel</p>
                    <p className="line-con"></p>
                    <p>+54 9 11 4975-2537 <br/> +54 9 11 3589-8532</p>
                </div>
                <div>
                    <i className="fas fa-envelope"></i>
                    <p>Mail</p>
                    <p className="line-con"></p>
                    <p>lidiasisi@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default DataContact;