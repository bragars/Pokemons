import React from "react";
import { Router } from '@reach/router';
import Favoritos from './Favoritos'
import Logininteligente from '../Components/Logininteligente'
import Getuser from './Getuser'
import Capture from './Capture'
import Paths from './Paths.js'

function New () {
    return (
    
    <>

        <Router>

            <Logininteligente default></Logininteligente>

            <Paths path="/index"></Paths>

            <Capture path="/pokedex"></Capture>

            <Favoritos path="/favoritos"></Favoritos>

            <Getuser path="/usuario"> </Getuser>

        </Router>
    </>
    );
}

export default New