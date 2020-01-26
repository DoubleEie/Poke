import React, {Component} from 'react';
import './App.css';

import ReactNotification from 'react-notifications-component'
import { store } from "react-notifications-component"
import 'react-notifications-component/dist/theme.css'
import "animate.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Pages
import WelcomePage from "./components/pages/WelcomePage";
import NotificationPage from "./components/pages/NotificationPage"
import NotFoundPage from "./components/pages/NotFoundPage";
import CreatePage from "./components/pages/CreatePage";
import JoinPage from "./components/pages/JoinPage";
import UserPage from "./components/pages/UserPage";
import PokePage from "./components/pages/PokePage.js";

class App extends Component {

  render(){
    return (
      //Put redirect.
      <Router>
        <Switch>
          <Route exact path = "/" component = {WelcomePage}/>
          <Route exact path = "/404" component = {NotFoundPage}/>
          <Route exact path = "/NotificationPage" component = {NotificationPage}/>
          <Route exact path = "/create" component = {CreatePage}/>
          <Route exact path = "/user" component = {UserPage}/>
          <Route exact path = "/join" component = {JoinPage}/>
          <Route exact path = "/poke" component = {PokePage}/>
        </Switch>
      </Router>
     
    );
  }


  

}

export default App;
