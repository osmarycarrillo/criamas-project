import React, { Component } from 'react';
import img_somos from "../img_photos/somos.png";

class Somos extends Component {

    render() {
        return (
            <div className="somos">
            <div className="textsomos">
                    <p className="title_somos">SOMOS <span className="title_black">cria</span><span className="title_red">más</span></p>
                    <p className="bajada_somos">Utilizamos el mejor conocimiento para unir a los seres humanos con las mejores mascotas,<br />
                        y ayudar a que estas se adapten a sus familias y a su nuevo hogar<br /></p>
                    <p className="heart why">¿Por qué elegirnos? </p>
                </div>
                <div className="somos-box">
                    <div className="somos-left">
                        <i className="fas fa-heart icon heart"></i>
                        <p className="bold">NUESTROS VALORES</p>
                        <hr className="line heart"></hr>
                        <p className="parragraph_somos">Educacion sobre el respeto por la vida animal <br />
                            Respeto por los seres vivientes <br />
                            Respeto entre seres humanos y animales <br />
                            Acompañar el desarrollo del cachorro <br />
                            El cuidado de nuestras mascotas.</p>
                    </div>
                    <div className="somos-rigth">
                        <i className="fas fa-file-alt icon gray"></i>
                        <p className="bold">NUESTRO CATÁLOGO</p>
                        <hr className="line"></hr>
                        <p className="parragraph_somos"> Proveemos a nuestros clientes un portafolio completísimo 
                        <br />de Razas de calidad con un nivel de detalles importantes<br /> para satisfacer sus deseos y necesidades. <br />
                          Todo esto le ayudara a decidir cual es el mejor <br />
                           candidato para ser el nuevo integrante de su familia.
                        </p>
                    </div>
                </div>
                <div className="img-somos">
                    <div className="img_content_somos">
                      <img className="dogs_somos" src={img_somos} alt=" imagen diversas razas de perros "/>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Somos;

