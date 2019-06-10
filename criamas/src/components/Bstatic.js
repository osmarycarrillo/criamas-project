import React from 'react';
import Textb from '../Textb';


class Bstatic extends React.Component {

    render() {
        return (
            <div className="translates" >
                <div className="cont-trans">
              {/* dentro de las llaves iria el nombre de la ruta en la que este parado el usuario */}
                <Textb>{}</Textb>
                <div className="dogt"> <img src="" alt="perro imagen para traslados"></img> </div>
                <div className="square"></div>
                </div>
            </div>
        )
    }
}
export default Bstatic;

// Este componente es la base del banner que pertenene a  las vistas
//  de traslados,blog,detalle del producto y detalle de cachorros AM
