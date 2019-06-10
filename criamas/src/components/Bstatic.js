import React  from 'react';
// import{Textb,Textblog} from'../src/components'
import Textb from './Textb';
import Textblog from './Textblog';


class Bstatic extends React.Component {
    constructor(props){
        super(props)
        this.state={
            contenido:1
        }
    }

    render() {
        return (
            <div className="translates" >
                <div className="cont-trans">
              {/* dentro de las llaves iria el nombre de la ruta en la que este parado el usuario */}
              <LayoutContendio contenido={this.state.contenido} />
                <div className="dogt"> <img src="" alt="perro imagen para traslados"></img> </div>
                <div className="square"></div>
                </div>
            </div>
        )
    }
}

function LayoutContendio(props) {

     switch(props.contenido) {
    
      case 1: return <Textb/>; break;
      case 2: return <Textblog/>; break;
    //   case 3: return <componente3/>; break;
      default: return <Textb/>; break;
    
    } 
    
    }
export default Bstatic;

// Este componente es la base del banner que pertenene a  las vistas
//  de traslados,blog,detalle del producto y detalle de cachorros AM

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