import React from 'react';
import Cachorros from '../img_photos/cachorros.png';

const Bstatictras = (props) => {

    return (
        <div className="box-static">
            <div className="cont-trans">
                <div className="box-p">
                    <p className="title-red">{props.subtitle} </p>
                    <p className="title-2">{props.title}</p>
                    <p className="title-3">{props.bajada}</p>
                </div>
                <div className="dog"> 
                    <img className="dog_img" src={Cachorros} alt="perro imagen para traslados"></img> 
                </div>
            </div>               
        </div>
    );    
}

export default  Bstatictras ;
// Este componente realiza la descripcion del texto del banner
