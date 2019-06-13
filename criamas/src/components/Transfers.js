import React, { Component } from 'react';
// import{Textb,Textblog} from'../src/components'
import Bstatic from './Bstatic';
import ServiceRequest from './ServiceRequest';

class Transfers extends Component {
    render() {
        return (
            <div>
                <Bstatic></Bstatic>
                <ServiceRequest></ServiceRequest>
                Aqui comienza transfer
                <Bstatic>
                    <div className="box-p">
                        <p className="red-trans"> Bienvenido a Traslados</p>
                        <p className="tinfo">Aquí encontrará información</p>
                        <p className="tinfo">sobre nuestro servicio</p>
                        <p>Ante cualquier duda, podemos ayudarte.</p>
                        <div className="dogt"> <img src="" alt="perro imagen para traslados"></img> </div>
                        <div className="square"></div>
                        <p className="heart">  <i class="fab fa-gratipay"></i></p>
                    </div>

                </Bstatic>
                <p>NUESTRO SERVICIO DE TRASLADO</p>
                <p>La tranquilidad de viajar seguro y confiado de que tu mejor amigo esta en buenas manosLo que nos diferencia es el <p className="red-trans">TRATO PERSONALIZADO :</p> </p>

                <p>criamas realiza TODA la gestión: desde el primer contacto hasta la entrega de tu cachorro a la compañía aérea, incluyendo las inspecciones sanitarias, el despacho de aduanas y todos los servicios requeridos por nuestros clientes.</p>
                <div className="viñetas">
                    <div className="left">
                        <p className="v">*Transporte de animales vivos</p>
                        <p className="v">*Importación/Exportación</p>
                        <p className="v">*Controles en Fronteras (Veterinario y CITES)</p>
                        <p className="v">*Recogida/Entrega a domicilio</p>
                        <p className="v">*Tramitación de la documentación</p>
                        <p className="v">*Visados</p>
                    </div>
                    <div className="rigth">
                        <p className="v">*Disposición de Transportines</p>
                        <p className="v">*Consultas</p>
                        <p className="v">*Hotel de animales</p>
                        <p className="v">*Teléfono 24 hrs. para emergencias</p>
                        <p className="v">*Servicio VIP</p>
                    </div>
                    <p>Todos nuestros servicios están orientados a conseguir el máximo bienestar y trato respetuoso y amoroso  durante su transporte, desde la recogida en origen hasta la entrega en destino (según servicio).  También podemos ofrecer de un servicio de hoteles para animales, con alojamientos específicos, con control de temperatura según sus necesidades, utilizables en aquellos casos en los que sea necesario efectuar un tránsito o pasar una noche.</p>
                </div>
            </div>
        )
    }
}


export default Transfers;

