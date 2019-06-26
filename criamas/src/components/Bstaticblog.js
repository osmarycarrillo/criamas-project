import React, { Component } from 'react';
import Schnauzer from '../img_photos/schnauzer.png';




class Bstaticblog extends Component {

    render() {
        return (
           <div className="box-static">
               <div className="cont-trans">
                    <div className="box-p">
                        <p className="title-red"> Bienvenido a Nuestro Blog</p>
                        <p className="title-2">Aquí encontrará información útil  <br />y relevante</p>
                        <p>Ante cualquier duda, podemos ayudarte.</p>
                    </div>
                    <div className="dog"> <img className="dog" src={Schnauzer} alt="perro imagen para traslados"></img> </div>

                </div>
               
           </div>
        )
    }
}
export default  Bstaticblog ;
