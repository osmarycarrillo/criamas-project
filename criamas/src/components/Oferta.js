import React, {Component} from 'react';
import DataOferta from './oferta/DataOferta';

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
				<div className="box_center_oferta">
					<div className="box_first">
					  <h3 className="title_oferta">{property.title}</h3>
					  <p className="subtitle_oferta">{property.tiempo}</p>
					</div>
					<div className="box_second">
						<div className="content_image">                      
						  <img className="img_oferta" src={property.image} alt=""/>
                        </div>
					</div>
					<div className="box_third">
					  <h3 className="desc">{property.descuento}</h3>
					  <p className="products">{property.productos}</p>
					</div>
				</div>
			</div>
	    )
	}
}

export default Oferta;