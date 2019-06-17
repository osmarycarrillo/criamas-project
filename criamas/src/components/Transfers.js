import React, { Component } from 'react';
import Bstatic from './Bstatic';
import ServiceRequest from './ServiceRequest';
import Contact from './Contact';

class Transfers extends Component {

    render() {
        return (
        <div>
                Aqui comienza transfer
                <Bstatic>    
                </Bstatic>
                <p>NUESTRO SERVICIO DE TRASLADO</p>
                <p>La tranquilidad de viajar seguro y confiado de que tu mejor amigo esta en buenas manosLo que nos diferencia es el <p className="red-trans">TRATO PERSONALIZADO :</p> </p>

                <p>criamas realiza TODA la gestión: desde el primer contacto hasta la entrega de tu cachorro a la compañía aérea, incluyendo las inspecciones sanitarias, el despacho de aduanas y todos los servicios requeridos por nuestros clientes.</p>
                <div className="viñetas">
                    <div className="left">
                    <p className="">  <i className="fab fa-gratipay heart"></i>Transporte de animales vivos</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Importación/Exportación</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Controles en Fronteras (Veterinario y CITES)</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Recogida/Entrega a domicilio</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Tramitación de la documentación</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Visados</p>
                    </div>
                    <div className="rigth">
                    <p className="">  <i className="fab fa-gratipay heart"></i>Disposición de Transportines</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Consultas</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Hotel de animales</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Teléfono 24 hrs. para emergencias</p>
                    <p className="">  <i className="fab fa-gratipay heart"></i>Servicio VIP</p>
                    </div>
                    <p>Todos nuestros servicios están orientados a conseguir el máximo bienestar y trato respetuoso y amoroso  durante su transporte, desde la recogida en origen hasta la entrega en destino (según servicio).  También podemos ofrecer de un servicio de hoteles para animales, con alojamientos específicos, con control de temperatura según sus necesidades, utilizables en aquellos casos en los que sea necesario efectuar un tránsito o pasar una noche.</p>
                </div>
                            aqui termina transfer
                <ServiceRequest></ServiceRequest>
                <Contact></Contact>
            </div>
        )
    }
}

export default Transfers;

