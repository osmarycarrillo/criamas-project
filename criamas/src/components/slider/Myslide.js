import React from 'react';

const content = [
	{
		title: 'Bienvenido a Criamás',
		description:
			'Trabajamos la honestidad con el amor por el mejor cachorro',
		button: 'Comprar',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		detalle: 'Raza:',
		Perro: 'Pomeranian'
	},
	// {
	// 	title: 'Bienvenido a Criamás',
	// 	description:
	// 		'Trabajamos la honestidad con el amor por el mejor cachorro',
	// 	button: 'Comprar',
	// 	image: 'https://i.imgur.com/ZXBtVw7.jpg',
	// 	detalle: 'Raza:',
	// 	Perro: 'Labrador'
	// },
	// {
	// 	title: 'Bienvenido a Criamás',
	// 	description:
	// 		'Trabajamos la honestidad con el amor por el mejor cachorro',
	// 	button: 'Comprar',
	// 	image: 'https://i.imgur.com/ZXBtVw7.jpg',
	// 	detalle: 'Raza:',
	// 	Perro: 'Bulldog'
	// }
];



const Myslide = () => {

	return (
		<div className="box-center">
			{content.map((item, index) => (<div key={index} className="slider-content">
				<div className="inner">
					<h4 className="subtitle">{item.title}</h4>
					<p>{item.description}</p>
					<button className="buttons-slide">{item.button}</button>
				</div>
				<div className="image-slide">
					<img className="image_dog" src={item.image} alt="" />
				</div>
			</div>
			))}

			<div className="counter">
			   <i className="fas fa-circle"></i>
			   <i className="fas fa-circle"></i>
			   <i className="fas fa-circle"></i>
			</div>
		</div>
	);
}

export default Myslide;
