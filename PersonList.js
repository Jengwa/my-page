import React from 'react';
import Person from './Person';


const PersonList = ({ people }) => {

   
	return (
		<div>
			 	{
				 	people && people.map((info, item) => {
				 	 	people && console.log(people)
						return (
							<Person 
							key={[item]} 
							name={people[item].name}
							height={people[item].height}
							mass={people[item].mass}
							hair_color={people[item].hair_color}
							skin_color={people[item].skin_color}
							eye_color={people[item].eye_color}
							birth_year={people[item].birth_year}
							gender={people[item].gender}
							homeworld={people[item].homeworld}
							films={people[item].films}
							species={people[item].species}
							vehicles={people[item].vehicles}
							starships={people[item].starships}
							created={people[item].created}
							edited={people[item].edited}
							url={people[item].url}
							/>
						);	
					})
				}	
		</div>
	)
};

export default PersonList;