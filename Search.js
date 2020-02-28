import React from 'react'

const Search = ({searchfield,searchChange}) => {
	return (
		<div>
			<input className="pa3 ba b--blue bg-lightest-green" type='search' placeholder='search people'
			onChange={searchChange}
			/>
			
		</div>
	)
}

export default Search;