import React from "react";

const Forminteligente = ({children}) => {

    const salve = (event) => {
        
        const dados={};

        for (const saidas of Array.from(event.target.elements)){
            if (!saidas.name) continue
            dados[saidas.name]=saidas.value;
        }

        console.log(dados);  
        alert ('voce esta entrando como ' + dados.email);    
    };

    return (
        <form onSubmit={salve} action="/Paths">{children} </form>
    );
};

export default Forminteligente