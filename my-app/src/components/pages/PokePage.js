import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';
import '../../App.css';
import pokeImage from '../../images/PokeButton.png';
class PokePage extends Component{
    render(){
    return(
        <div className = "container">
             <div className = "header"><Link to = "/">
                <button className = "back-button">Back</button></Link>
            Click Below !</div>
            <div className = "pokeImageContain">
                <img src = {pokeImage} alt="cannot display"/>

            </div>
        </div>
    )
}
}


export default PokePage;