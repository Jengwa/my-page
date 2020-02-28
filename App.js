import React, { Component } from 'react';

import PersonList from './PersonList';
import Search from './Search'
import Scroll from './Scroll';
import './App.css';




class App extends Component {
	constructor() {
		super()
		this.state = {
			people:[],
			loading:true,
			searchfield: ''
		}
	}
	 componentDidMount() {
		const urls = [
			"https://swapi.co/api/people/1/",
			"https://swapi.co/api/people/2/",
			"https://swapi.co/api/people/3/",
			"https://swapi.co/api/people/4/",
			"https://swapi.co/api/people/5/",
		]
		//const [people1,people2,people3,people4,people5] = 
		Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
		.then(info => {
			console.log(info)
			this.setState({people: info/*[].concat(...people)*/ ,loading:false});
		});	
	}

	onSearchChange = (event) =>	{
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filterPeople = this.state.people.filter(people => {
			return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div>
				
				{this.state.loading || !this.state.people ?(
				<h1>Loading...</h1>) : (

				<div className="tc">
					<h1 className="f1">My Api Page</h1>
					<Search searchChange={ this.onSearchChange}/>
					<Scroll>
						<PersonList  people={filterPeople} />
					</Scroll>
				</div>
				)}	
			</div>
		)
	}

}



export default App;