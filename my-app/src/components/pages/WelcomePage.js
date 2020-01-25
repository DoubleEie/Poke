import React from "react";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';
import '../../App.css';
const WelcomePage = () =>{
    return(
        <div className = "container">
            <div className = "header">Welcome to Poke</div>
                <div className = "button-contain">
                    <div className = "btn-group">
                        <Link to = "/create">
                            <button>Create</button>
                        </Link>
                        <Link to = "/join">
                            <button>Join</button>
                        </Link>
                        <Link to = "/user">
                            <button>User Page</button>
                        </Link>
                    </div>
                </div>
        </div>
    );
};

export default WelcomePage;