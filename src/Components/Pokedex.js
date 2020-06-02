import React, { Component } from 'react'
import Modal from './Modal'
import '../Styles/Exercise.css'

class Testing extends Component {
    state = {
		data : []
    };

    componentWillReceiveProps(props) {
        let data = props.usersData;
        let anotherData = [];
        data.map((el) => {
            anotherData.push(el);
            return anotherData;
        })        
        kindTags();

        function kindTags() {
            anotherData.map((el) => {
                let word = el.kind; //o que volta da API kind
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
            })}
            
        this.setState({
            data:data
        })
    
    }

    render() {
        return(
            <>
            <div id="each-pokemon">
                {this.state.data.map((el,i) => (
                    <div key={i}>
                        <Modal el={el}/>
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
                ))}
            </div>
            </>
        )   
    }
}

export default Testing