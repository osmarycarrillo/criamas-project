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
                            <p className="text_contact">Nicaragua 5596, C.A.B.A</p> 
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
                <iframe className= "box_mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.886408374484!2d-58.43564438519601!3d-34.58174066384172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb591ef3c0c81%3A0x3bc93c0d72b70932!2sNicaragua+5596%2C+C1414BWD+CABA!5e0!3m2!1ses-419!2sar!4v1561402313884!5m2!1ses-419!2sar" ></iframe>  
                </div>
            </div>

        )
    }
}

export default DataContact;