import React, {Component} from 'react';


class Textblog extends Component {

    render() {
        return (
            <div className="box-p">
            <p className="red-trans"> Bienvenido a Nuestro Blog</p>
            <p className="tinfo">Aquí encontrará información útil</p>
            <p>Ante cualquier duda, podemos ayudarte.</p>
            <div className="dogt"> <img src="" alt="perro imagen para blog"></img> </div>
                    <div className="square"></div>
{/* en esta seccion debe ir un bread crum que traiga el nombre 
del producto el contenido es dinamico */}
            {/* <p className="tinfo">Detalle del producto</p>
            <p>Pet shop/bolsa blanca.</p> */}
           
{/* // requerimos decidir que caracteristicas del cachorro se van a mostrar en esta seccion 
// tambien es dinamico y va casado al filtro */}
{/* <p className="tinfo">caracteristicas de nuestro cachorro</p>
<p>Ante cualquier duda, podemos ayudarte.</p> */}
</div>
        )
    }
}
export default Textblog;