import React from 'react';

const Person = ({name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,homeworld,films,species,vehicles,starships,created,edited,url}) => {
	return (
		<div>
			<div className="pa2">
	 			<h2>Name:{name}</h2>
	 			<p>Height:{height}</p>
	 			<p>Mass:{mass}</p>
				<p>Hair-Colour:{hair_color}</p>
				<p>Skin-Colour: {skin_color}</p>
				<p>Eye-Colour:{eye_color}</p>
				<p>Birth-Year:{birth_year}</p>
				<p>Gender:{gender}</p>
				<p>Home-World:{homeworld}</p>
				<p>Film:{films}</p>
				<p>Species:{species}</p>
				<p>Vehicles:{vehicles}</p>
				<p>Starships:{starships}</p>
				<p>Created:{created}</p>
				<p>Edited{edited}</p>
				<p>Url:{url}</p>
			</div>	
		</div>
	)
}
export default Person;