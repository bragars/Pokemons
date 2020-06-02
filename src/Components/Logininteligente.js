import React from "react";
import axios from 'axios'

let ops = [];
const Logininteligente = () => {
    
    const [valido,setValido] = React.useState(false);
    Get();
    
    async function Get() {
        for (let i = 1; i < 16; i++) {
            Axis();
            async function Axis(){
                const response = await axios.get(`https://pokedex20201.herokuapp.com/users?page=${i}`)
                let jsonDataData = await(await(await response).data).data;
                const nomeusuario = jsonDataData.map(function (obj) {return obj.username;});
                ops.push(...nomeusuario);
            }

        };
    }
    console.log(ops);

    const enviando = (event) => {
        event.preventDefault();
        const dados={};
        for (const saidas of Array.from(event.target.elements)){if (!saidas.name) continue 
            dados[saidas.name]=saidas.value;}
        console.log(dados);  

        if (!ops.includes(dados.userid)) {
            // alert("Pode passar");
            setValido(true);
            send();
            async function send(){
                const response = axios.post('https://pokedex20201.herokuapp.com/users', {username: dados.userid })
                let resposta = await response;
                console.log(resposta);
            }
            localStorage.setItem('username', dados.userid);
            console.log('entrei');
            window.location.href = "/index";
            
        } else {
            alert("Desculpe-me, mas este nome ja está reservado");
        };
    }; 
    
    return(
        <div id="gabrielteste">
            <div className="caixa">
                <form name="myForm" id="myForm" method="get" onSubmit={enviando} >
                    <label className="labellogin">Quem é você, treinador?</label>
                    <br/>
                    <input type="text" name="userid" className="logininput"></input>
                    <button type="submit" className="loginbotao"> Enviar </button>
                </form>
            </div>
        </div>
 )
}

export default Logininteligente