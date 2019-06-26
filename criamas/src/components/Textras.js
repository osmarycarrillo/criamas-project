import React, { Component } from 'react';
import Cachorros from '../img_photos/cachorros.png';
// import Schnauzer from '../../../img_photos/schnauzer.png';



class Textras extends Component {

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
export default Textras;
// Este componente realiza la descripcion del texto del banner
// que pertenene a  las vistas  de traslados, AM

// .box-center {
//     .slider-content {
//         .image-slide {
//             width: 68%;
//             height: 100vh;

//             .image_dog {
//                 width: 100%;
//                 height: auto;
//             }
//         }
//     }
// }