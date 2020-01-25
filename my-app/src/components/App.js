import React, {Component} from 'react';
import '../App.css';

import ReactNotification from 'react-notifications-component'
import { store } from "react-notifications-component"
import 'react-notifications-component/dist/theme.css'
import "animate.css"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        noteText: '',
        notes: [],
    }
  }
  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){

    }
  }
  render(){
    return (
      <div className="container">
        <div className = "header"> Poke Buddies</div>

        <div className = "btn">+</div>

        <input type = "text"
          ref ={((input) => {this.textInput = input})}
          className = "textInput"
          value = {this.state.noteText}
          onChangeText = {noteText => this.updateNoteText(noteText)}
          onKeyPress = {this.handleKeyPress.bind(this)}
          />
        <ReactNotification />
        {this.Home()}
      </div>
    );
  }

  Home(props){
    const handleOnClickDefault = () =>{
      store.addNotification({
        title:"new notification",
        message: "This is default notification",
        type: "success",
        container: "top-right",
        insert: "top",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss:{
          duration: 2000,
          showIcon: true
        },
        width: 250

      })
    }

    const handleOnClickCustom = () =>{
      store.addNotification({
        content: this.MyNotification(),
        type: "success",
        container: "top-right",
        insert: "top",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss:{
          duration: 2000,
          showIcon: true
        },
        width: 250

      })
    }

    return(
      <div>
        <button onClick={handleOnClickDefault}>
          Click here for a default notification
        </button>
        
        <button onClick={handleOnClickCustom}>
          Click here for a customized notification
        </button>
      </div>
      
    )
  }

  MyNotification(){
    return(
      <div>
        <header>This is my notification</header>
      </div>

    )
  }
  

}

export default App;
