import React, { Component } from 'react';
// import Bstatic from './Bstatic';
import ServiceRequest from './ServiceRequest';
import Contact from './Contact';
import Textras from './Textras';
import Information from './Information';
import Footer from './Footer';

class Transfers extends Component {
    render() {
        return (
            <div className="transfers">
                <Textras></Textras>
                <div className="box-tras">
                    <p className="bold">NUESTRO SERVICIO DE TRASLADO</p>
                    <p className="bold">- La tranquilidad de viajar seguro y confiado de que tu mejor amigo esta en buenas manos -</p>
                    <p>-</p>
                    <p> Lo que nos diferencia es el <span className="title-red">Trato personalizado:</span> </p>
                    <p> <span className="bold">Criamas</span> realiza TODA la gestión: desde el primer contacto hasta la entrega de tu cachorro a la compañía aérea, <br />
                        incluyendo las inspecciones sanitarias, el despacho de aduanas y todos los servicios requeridos por nuestros clientes.</p>
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
                    </div>
                    <p>Todos nuestros servicios están orientados a conseguir el <span className= "p-red"> máximo bienestar y trato respetuoso y amoroso</span> <br />
                        durante su transporte, desde la recogida en origen hasta la entrega en destino (según servicio). <br />
                        También podemos ofrecer de un servicio de <span className="bold"> hoteles para animales, con alojamientos específicos, con control <br />
                            de temperatura según sus necesidades</span>, utilizables en aquellos casos en los que sea necesario efectuar <br />
                        un tránsito o pasar una noche.</p>
                </div>
                <ServiceRequest></ServiceRequest>
                <Contact></Contact>
                <ServiceRequest />
                <Contact />
                <Information />
                <Footer />
            </div>
        )
    }
}

export default Transfers;

