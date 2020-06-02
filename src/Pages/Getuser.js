import React,{ Component } from 'react'
import axios from 'axios'
import { Link } from '@reach/router';

let userData = [];

class Getuser extends Component {
	state = {
		data: [],
		name: localStorage.getItem('username')
	}
	
	async componentWillMount() {
		let name = this.state.name;
		
		await Axis(name);
		async function Axis(name) {
			let response = await axios.get(`https://pokedex20201.herokuapp.com/users/${name}`)
			console.log(response);
			let jsonData = await(await response.data).user;
			userData = userData.concat(jsonData);
			userData =  userData[0];
			return userData;
		} 
		this.setState({
			data:userData
		})
	}

	render() {
		return(
			<>	
				<h1 className="header"></h1>
				<div id="usuario2"> 
				{this.state.data.id >= 1 ? (
					<div className="user">
						<div className="user-page">
							<div className="user-caixa">
								<h1 className="userName">Welcome {this.state.data.username}</h1>
								<img className="user-image" src="https://4.bp.blogspot.com/-P9J4P6RXZxM/Vr1Qb-eF6iI/AAAAAAAAIxo/AFSc2ix33ao/s1600/Ash.png" alt="imagem" />
								<h2 className="frases">Are you ready? 
								<Link className="link" to={"/pokedex"}>Pokedex</Link>	
								</h2>
								<h2 className="frases">Let's start training 
								<Link className="link" to={"/favoritos"}>Favorites</Link>
								</h2>
								<h2 className="frases">Our map
								<Link className="link" to={"/index"}>Map</Link>
								</h2>
							</div>
						</div>
					</div>
				) : (
					<p></p>
				)}
				</div> 
				<div id="Pokemons">
					<h1 id="Pokemons-user"></h1>
				</div>
			</>
		)	
	}
}

export default Getuser