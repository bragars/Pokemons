import React from "react";
import {Link} from '@reach/router';

const Paths = (props) => (
    <div id="gabrielteste">
        <div className="index">
            <Link to="/pokedex">Pokedex</Link> <br/>
            <Link to="/favoritos">My Pokemons</Link> <br/>
            <Link to="/usuario">My Page</Link> <br/>
        </div>
    </div>

)

export default Paths