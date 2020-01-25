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

class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {WelcomePage}/>
          <Route exact path = "/NotFoundPage" component = {NotFoundPage}/>
          <Route exact path = "/NotificationPage" component = {NotificationPage}/>
          <Redirect to = "/404"/>
        </Switch>
      </Router>
     
    );
  }


  

}

export default App;
