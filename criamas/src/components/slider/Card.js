import React from 'react';
import PropTypes from 'prop-types';


const Card = ({property}) => {
	const {id, description, image, raza , url} = property;
	return (
		<div className="box-center">
			<div id={`card-${id}`} className="slider-content">
				<div className="inner">
				    <h4 className="subtitle">Bienvenido a <b>Criamás</b></h4>
					<p>{description}</p>
					<span className="span-raza">Raza:</span>
					<span className="raza-type">{raza}</span>					
					<a href={url} target="_blank" id='shop_button' className='shop'>
						Comprar
					</a>
				</div>
				
				<div className="image-slide">
					<img className="image_dog" src={image} alt={raza}/>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
