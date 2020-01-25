import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';
import '../../App.css';
import { tsConstructorType } from "@babel/types";
class CreatePage extends Component{
    constructor(props){
        const min = 1000;
        const max = 9999;
        var random = parseInt(min + (Math.random() * (max - min)));
        super(props)
        this.state = {
            code: random
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        var data = this.state;
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    displayVal = (event) => {
        console.log(this.state);

    }
    render(){
    var{code} = this.state
    return(
        <div className = "container">
             <div className = "header"><Link to = "/">
                <button className = "back-button">Back</button></Link>
            Create a Poke Space !</div>
        <div className = "code-enter">
            <form onSubmit = {this.handleSubmit}>
                <p><input type = 'text' placeholder ='Poke Code' code = 'code'value = {code} onChange = {this.handleInputChange}/></p>
                <p className = "create-join-btn"><button onClick = {this.displayVal}>Create</button></p>
            </form>
        </div>    
        </div>
    )
}
}


export default CreatePage;