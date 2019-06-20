import React, { Component } from 'react';
import Textras from './Textras';
// import Textras from './Textras';

class Bstatic extends Component {

    // constructor(props){
    //     super(props)
    //     this.state={
    //         contenido:1
    //     }
    // }
    /// debo pasarle por propiedades  propiedades 
    render() {
        return (
            <div className="translates" >
            <Textras></Textras>
                
            </div>
        )
    }
}


export default Bstatic;






// function LayoutContendio(props) {

//  switch(props.contenido) {

//   case 1: return <Textras/>; break;
//    case 2: return <Textblog/>; break;
// //   case 3: return <componente3/>; break;
// //   default: return <Textb/>; break;

// } 

// }



// import React, { Component } from 'react';
// import { componente1, componente2, componente3 } from '../src/components';
// class Contenido extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       contenido: 1//Aqui es el valor que le pasare al props de la función
//     };

//   }

//   render() {
//     return (
//       <div className="container-fluid">
//         <LayoutContendio contenido={this.state.contenido} />
//       </div>
//     )
//   }
// }

// function LayoutContendio(props) {

//  switch(props.contenido) {

//   case 1: return <componente1/>; break;
//   case 2: return <componente2/>; break;
//   case 3: return <componente3/>; break;
//   default: return <componente1/>; break;

// } 

// }
// export default Contenido

// Este componente es la base del banner que pertenene a  las vistas
//  de traslados,blog,detalle del producto y detalle de cachorros AM