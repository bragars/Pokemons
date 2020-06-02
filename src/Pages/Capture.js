import React, { Component } from 'react'
import axios from 'axios'
import Testing from '../Components/Pokedex'
import { Link } from '@reach/router';

let usersData = []

class Capture extends Component {
    state = {
    data : [],
    number:1
	};

async componentWillMount() {
  let number = this.state.number;
	const response = axios.get(`https://pokedex20201.herokuapp.com/pokemons/?page=${number}`)
	const jsonDataData = await (await (await response).data).data;
  let data = this.state.data.concat(jsonDataData);
  usersData = usersData.concat(data);
  
  this.setState({
		data:data
  })
  return usersData;
}

  more = async () => {
    let number = this.state.number + 1;
    await Axis(number);
    this.setState({
      number,
      data:usersData
    })
    
    async function Axis(number){
      const response = axios.get(`https://pokedex20201.herokuapp.com/pokemons/?page=${number}`)
      const jsonDataData = await (await (await response).data).data;
      let before = usersData;
      let after = jsonDataData;
      usersData = before.concat(after);
      return usersData;
    }
  }

  render() {
    return (
    <div>
      <div id="links">
        <Link className="cabecalho" to={"/index"}>Home</Link>
        <Link className="cabecalho" to={"/usuario"}>My Page</Link>
        <Link className="cabecalho" to={"/favoritos"}>My Pokemons</Link>
      </div>
      <h1 className="header">Pokemons</h1>
      <Testing usersData={usersData}/>
      <button className="btn-more" onClick={this.more}>More Pokemons</button>
    </div>
    );
  }
}

export default Capture