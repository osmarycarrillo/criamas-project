import React from 'react';

class DataContact extends React.Component {
    render() {
        return (
            <div className="data-contact">
                <div>
                    <div className="div-ic">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="div-dir">
                        <p>Dirección</p>
                        <p className="line-con"></p>
                        <p>Nicaragua 5596</p> 
                    </div>
                </div>
                <div>
                    <div className="div-ic">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="div-dir">
                        <p>Teléfono</p>
                        <p className="line-con"></p>
                        <p>+54 9 11 4975-2537 <br/> +54 9 11 3589-8532</p>
                    </div>
                </div>
                <div>
                    <div className="div-ic">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="div-dir">
                        <p>Mail</p>
                        <p className="line-con"></p>
                        <p>lidiasisi@gmail.com</p>
                    </div>
                </div>
                <div>ACA VA EL MAPAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!</div>
            </div>
        )
    }
}

export default DataContact;