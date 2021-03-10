import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state= {
    usernames: [
      {username: "solicidio"},
      {username: "camicidio"}, 
      {username: "julicidio"}
    ]
  }

  changeUsername = (event) => {
    this.setState({
      usernames: [
        {username: "solicidio"},
        {username: "camicidio"},
        {username: event.target.value}
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.usernames[2].username} changed={this.changeUsername}/>
        <UserOutput username={this.state.usernames[0].username}/>
        <UserOutput username={this.state.usernames[1].username}/>
        <UserOutput username={this.state.usernames[2].username}/>
      </div>
    );
  }
}

export default App;


