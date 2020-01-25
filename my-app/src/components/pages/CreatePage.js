import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';
import '../../App.css';
import { tsConstructorType } from "@babel/types";
class CreatePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            code: null
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const data = this.state
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
    const{code} = this.state
    return(
        <div className = "container">
             <div className = "header"><Link to = "/">
                <button className = "back-button">Back</button></Link>
            Create a Poke Space !</div>
        <div className = "code-enter">
            <form onSubmit = {this.handleSubmit}>
                <p><input type = 'text' placeholder ='Poke Code' code = 'code'onChange = {this.handleInputChange}/></p>
                <Link to = "/user">
                <p className = "create-join-btn"><button>Create</button></p>
                </Link>
            </form>
        </div>    
        </div>
    )
}
}


export default CreatePage;