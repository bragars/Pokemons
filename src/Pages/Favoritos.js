import React, { Component } from 'react'
import axios from 'axios'
import ModalFavorite from '../Components/ModalFavorite'
import { Link } from '@reach/router';

let userData = [];
let pokemons = [];

class Favoritos extends Component {
    state = {
        data: [],
        name: localStorage.getItem('username'),
        error: false
    } 

    async componentWillMount() {
        let name = this.state.name;
        const response = axios.get(`https://pokedex20201.herokuapp.com/users/${name}`)
        const jsonDataData = await (await (await response).data).pokemons;

        if(jsonDataData.length === 0){
            this.setState({
                error: true
            })
        }else{
            userData = this.state.data.concat(jsonDataData);
            console.log(userData);
            if(userData.length > 0){
                for(let i = 0; i < userData.length; i++) {
                    pokemons.push(userData[i]);
                }
                this.setState({
                    data:pokemons
                })
            }else{
                userData = userData[0];
                this.setState({
                    data:userData
                })
            }
        }
      }

    render(){
        return(
            <>

            <div id="links-favorito">
                <Link className="link-favorito" to={"/pokedex"}>Pokedex</Link>
                <Link className="link-favorito" to={"/usuario"}>My Page</Link>
            </div>
            <h1 className="header">Meus Pokemons</h1>
                <div id="favoritos-pokemon">
                    {
                        this.state.error === true ? 
                            (
                                <div className="favorito">
                                    <div className="noFavorito">
                                        <p>Empty</p>
                                        <p>Let's add some pokemons</p>
                                        <p>Go to Pokedex</p>
                                        <div className="sad">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-7xTwK-d9nOQXkSwp-eUCr3YwxuroYfN-mVYk06j-HMKHZSyk&usqp=CAU" alt="no-favorite"/>
                                        </div>
                                    </div>	
                                </div>
                        ) : (
                            this.state.data.length === 0 && this.state.error === false ? (
                                <div className="favorito">
                                    <p className="favoritoId">{this.state.data.id}</p>
                                    <p className="favoritoName">{this.state.data.name}</p>
                                </div>
                            )
                            : (
                                this.state.data.length > 0 ? (
                                    this.state.data.map((el,i) => (
                                        <div id="favorito" key={i}>
                                            <ModalFavorite el={el}/>
                                            <div className="pokemon">
                                                <img src={el.image_url} alt="Pokemon"/>
                                                <p>{el.id}</p>
                                                <span>{el.name}</span>
                                                <div className={
                                                    el.kind === 'fire'     ? 'fire'
                                                    : el.kind === 'water'    ? 'water'
                                                    : el.kind === 'grass'    ? 'grass'
                                                    : el.kind === 'bug'      ? 'bug'
                                                    : el.kind === 'poison'   ? 'poison'
                                                    : el.kind === 'ground'   ? 'ground'
                                                    : el.kind === 'electric' ? 'electric'
                                                    : el.kind === 'fighting' ? 'fighting' 
                                                    : el.kind === 'fairy'    ? 'fairy'
                                                    : el.kind === 'psychic'  ? 'psychic'
                                                    : 'default'
                                                }>{el.kind}</div>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                <p></p>
                                )
                        ))
                    }

                </div>
                
            </>
        )
    }
}

export default Favoritos
