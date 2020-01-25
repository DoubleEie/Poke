import React from "react";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';
import '../../App.css';
const WelcomePage = () =>{
    return(
        <div>
        <h3>Welcome to Poke</h3>
        <Link to = "/NotificationPage">
            <Button renderAs = "btn">Click to Continue</Button>
        </Link>
        </div>
    );
};

export default WelcomePage;