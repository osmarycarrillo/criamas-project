import React from 'react';

class DataContact extends React.Component {
    render() {
        return (
            <div className="data-contact">
                <div className="box_direction">
                    <div className="content_box_contact">
                        <div className="div-ic">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="div-dir">
                            <p>Dirección</p>
                            <hr className="line-con"></hr>
                            <p className="text_contact">Nicaragua 5596</p> 
                        </div>
                    </div>
                    <div className="content_box_contact">
                        <div className="div-ic">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div className="div-dir">
                            <p>Teléfono</p>
                            <hr className="line-con"></hr>
                            <p className="text_contact">+54 9 11 4975-2537 <br/> +54 9 11 3589-8532</p>
                        </div>
                    </div>
                    <div className="content_box_contact">
                        <div className="div-ic">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="div-dir">
                            <p>Mail</p>
                            <hr className="line-con"></hr>
                            <p className="text_contact">lidiasisi@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="box_mapa">
                  <div>ACA VA EL MAPAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!</div>
                </div>
            </div>

        )
    }
}

export default DataContact;