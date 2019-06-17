import React, { Component } from 'react';


class Somos extends Component {

    render() {
        return (
            <div className="somos">
                Aqui comienza somos
            <div className="textsomos">
                    <p>SOMOS CRIAMAS</p>
                    <p>Utilizamos el mejor conocimiento para unir a los seres humanos con las mejores mascotas,<br />
                        y ayudar a que estas se adapten a sus familias y a su nuevo hogar<br /></p>
                    <p className="heart why">¿Porque elegirnos? </p>
                </div>
                <div className="somos-box">
                    <div className="somos-left">
                        <i class="fab fa-gratipay icon heart"></i>
                        <p className="">NUESTROS VALORES</p>
                        <p className="line heart"></p>
                        <p>Educacion sobre el respeto por la vida animal <br />
                            Respeto por los seres vivientes <br />
                            Respeto entre seres humanos y animales <br />
                            Acompañar el desarrollo del cachorro <br />
                            El cuidado de nuestras mascotas.</p>
                    </div>
                    <div className="somos-rigth">
                        <i class="fas fa-file-alt icon gray"></i>
                        <p className="title-sub">NUESTRO CATÁLOGO</p>
                        <p className="line"></p>
                        <p>educacion sobre el respeto por la vida animal <br />
                            Respeto por los seres vivientes <br />
                            Respeto entre seres humanos y animales <br /> </p>
                    </div>
                </div>
                <div className="img-somos">
                    <img src="" alt=" imagen diversas razas de perros "/>
                    </div>
            </div>
        )
    }
}

export default Somos;

