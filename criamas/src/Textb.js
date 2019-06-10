import React, {Component} from 'react';


class Textb extends Component {

    render() {
        return (
            <div className="box-p">
            <p className="red-trans"> Bienvenido a Traslados</p>
            <p className="tinfo">Aquí encontrará información</p>
            <p className="tinfo">sobre nuestro servicio</p>
            <p>Ante cualquier duda, podemos ayudarte.</p>
      
            <p className="red-trans"> Bienvenido a Nuestro Blog</p>
            <p className="tinfo">Aquí encontrará información útil</p>
            <p>Ante cualquier duda, podemos ayudarte.</p>
{/* en esta seccion debe ir un bread crum que traiga el nombre 
del producto el contenido es dinamico */}
            <p className="tinfo">Detalle del producto</p>
            <p>Pet shop/bolsa blanca.</p>
           
{/* // requerimos decidir que caracteristicas del cachorro se van a mostrar en esta seccion 
// tambien es dinamico y va casado al filtro */}
<p className="tinfo">caracteristicas de nuestro cachorro</p>
<p>Ante cualquier duda, podemos ayudarte.</p>
</div>
        )
    }
}
export default Textb;
// Este componente realiza la descripcion del texto del banner
// que pertenene a  las vistas  de traslados,blog,detalle del producto y detalle de cachorros AM

// import React, { Component } from 'react';



// class Bread extends Component {
  
  
//   render() {
    
//     return (
//       <div className="div-bread">

//        <div><p className="breadCrumb">{this.props.categorias.map((c,i)=> 
//        <span className="category">{c}{this.props.categorias.length-1!=i && <span> > </span> }</span>)} </p></div>
//       </div>
      
//     );
//   } 
// }

// export default Bread;