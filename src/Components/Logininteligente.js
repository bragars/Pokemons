import React, { useState, useEffect } from "react";
import axios from 'axios'
import Loading from '../Components/Loading'

const Logininteligente = () => {
    
    const [arrayUsers, setArrayUsers] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        Get();
        async function Get() {
            const response = await axios.get(`https://pokedex20201.herokuapp.com/users`)
            let size = await (await response.data).size;
            
            await Axis(size);
            async function Axis(size){
                for (let index = 1; index < size; index++) {
                    const response = await axios.get(`https://pokedex20201.herokuapp.com/users?page=${index}`)
                    let jsonDataData = await(await(await response).data).data;
                    
                    let nomeusuario = jsonDataData.map((user) => 
                        { return user.username }
                    );
                    
                arrayUsers.push(...nomeusuario);
                }
                setDone(true);
            }
        }
    }, [])

    const enviando = (event) => {
        event.preventDefault();

        const dados={};
        for (const saidas of Array.from(event.target.elements)){
            if (!saidas.name) 
                continue 
            dados[saidas.name] = saidas.value;
        }

        let validate = /^[a-zA-Z]+$/.test(dados.userid);
        if(validate) {
            if (arrayUsers.includes(dados.userid)) {
                alert("Desculpe-me, mas este nome ja está reservado");
            } else {
                send();
                async function send(){
                    axios.post('https://pokedex20201.herokuapp.com/users', { username: dados.userid })
                    .then(() => {
                        localStorage.setItem('username', dados.userid);
                        window.location.href = "/index";
                    })
                    .catch(() => {
                        alert('Houve um problema com sua conexão, tente novamente !');
                    })
                }
            };
        }else{
            alert('Invalid input, Just letters');
        }
    }; 
    
    return(
        <>
        {
            !done ? 
                <div id="loading">
                    <Loading />
                </div>
            :
                <div id="gabrielteste">
                    <div className="caixa">
                        <form name="myForm" id="myForm" method="get" onSubmit={enviando} >
                            <label className="labellogin">Who is you coach?</label>
                            <br/>
                            <input type="text" name="userid" className="logininput"></input>
                            <button type="submit" className="loginbotao"> Send </button>
                        </form>
                    </div>
                </div>
        }
       </>
    )
}

export default Logininteligente