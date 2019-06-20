import React, {Component} from 'react';
import DataOferta from './oferta/DataOferta';

// const Oferta = ({DataOferta}) => {
// 	const {id, description, button, image, raza} = property;
// 	return (
// 		<div>
//             <p>{}</p>
// 		</div>
// 	);
// }

class Oferta extends Component {
	constructor(props){
	  super(props);
	  this.state = {
		property: DataOferta.banners[0]
	  }  
	}

	render() {
	  const {property} = this.state;
	  return (
		<div className='box_oferta'>
		  <p>{property.title}</p>
		</div>
	  )
	}
}

export default Oferta;