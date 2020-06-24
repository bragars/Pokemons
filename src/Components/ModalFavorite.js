import React, { Component } from 'react'
import Modal from 'react-modal'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import Axios from 'axios';

Modal.setAppElement('#root');

let count = 0;

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      transform             : 'translate(-50%, -50%)',
      width                 : '20%'
    }
};

class ModalFavorite extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            data: [props.el],
            img: FaHeart,
            likes: 0
        }
    }

    pick = async () => {
        let pokemon = this.state.data[0].name;
        count = count + 1;
        this.setState({
            likes:count,
            img:FaRegHeart
        })
        let name = localStorage.getItem('username');
        
        await Axis();
        async function Axis(){
            Axios.delete(`https://pokedex20201.herokuapp.com/users/${name}/starred/${pokemon}`);
        }
        window.location.reload(true);
    }

    open = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    render() {
        return(
            <div>
                <button className="btn" onClick={this.open}>Open</button>
                <Modal isOpen={this.state.modalIsOpen}
                       onRequestClose={() => this.setState({modalIsOpen:false})}
                       style={customStyles}
                >
                    <div>
                        <>{this.state.data.map((el,i) => (
                            <div key={i}>
                                <img src={el.image_url} alt="Pokemon"/>  
                                <p>{el.name}</p>
                                <p>{el.id}</p>
                                <p>{el.kind}</p>
                                <this.state.img
                                className="icon-heart"
                                onClick={this.pick}
                                />
                            </div>
                        ))}</>
                        <button className="btn" onClick={() => {this.setState({modalIsOpen:false})}}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalFavorite