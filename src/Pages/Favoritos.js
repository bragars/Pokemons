import React, { Component } from 'react';
import axios from 'axios';
import ModalFavorite from '../Components/ModalFavorite';
import { Link } from '@reach/router';

let userData = [];

export const test = () => {
    const test = userData.length;
    return test;
}


class Favoritos extends Component {
    state = {
        data: [],
        name: localStorage.getItem('username'),
        error: false,
        errorRequest: false
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

            userData.map((el) => {
                let word = el.kind;
                let indexAtual;
                let word1 = '';
                let word2 = '' ;
                let word3 = '';
                let twiceTags = false;

                for(let i=0; i <= word.length; i++) {
                        indexAtual = i;
                        if(word.charAt(i) === ';') {
                            twiceTags = true;
                            for(let j=0; j < indexAtual; j++){
                                    word1 += word.charAt(j);
                            }
                            for(let g = indexAtual+1; g <= word.length; g++){
                                    word2 += word.charAt(g);
                            }       
                        }else{  
                            word3 += word.charAt(i);
                        }
                }
                if(twiceTags === true) {
                    el.kind = word1 + " " + word2;
                } else{
                    el.kind = word3;
                }
                return el.kind;
            })
                this.setState({
                    data: userData
                })
            }
    }

    render(){
        return(
            <>

                <div id="links-favorito">
                    <Link className="link-favorito" to={"/pokedex"}>Pokedex</Link>
                    <Link className="link-favorito" to={"/usuario"}>My Page</Link>
                </div>
                <h1 className="header">My Pokemons</h1>
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
