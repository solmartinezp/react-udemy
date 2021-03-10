import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state= {
    length: '',
    word: ''
  }

  outputLengthHandler= (e) => {
    let newState= this.state.length;
    newState= e.target.value;
    this.setState({length: newState.length});
    this.setState({word: e.target.value});
  }

  deleteCharHandler = (index) => {
    const text= this.state.word.split('');
    text.splice(index, 1);
    const updatedText= text.join('');
    this.setState({word: updatedText});
  }

  render() {
    let w= this.state.word;
    let array= w.split('');

    let charC= array.map((char, index)=> {
      return <CharComponent clicked={()=> this.deleteCharHandler(index)} letter={char} key={index}/>
    });

    return (
      <div className="App">
        <input type="text" value={this.state.word} onChange={this.outputLengthHandler}/>
        <p>{this.state.length}</p>

        <ValidationComponent length={this.state.length}/>
        {charC}
      </div>
    );
  }
}

export default App;
