import React, { Component } from 'react';
import Cachorros from '../img_photos/cachorros.png';




class Bstatictras extends Component {

    render() {
        return (
           <div className="box-static">
               <div className="cont-trans">
                    <div className="box-p">
                        <p className="title-red"> Bienvenido a Traslados</p>
                        <p className="title-2">Aquí encontrará información <br />sobre nuestro servicio</p>
                        <p>Ante cualquier duda, podemos ayudarte.</p>
                    </div>
                    <div className="dog"> <img className="dog" src={Cachorros} alt="perro imagen para traslados"></img> </div>

                </div>
               
           </div>
        )
    }
}
export default  Bstatictras ;
// Este componente realiza la descripcion del texto del banner
