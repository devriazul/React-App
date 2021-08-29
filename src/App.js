import React, { Component } from 'react';
import './App.css';
import Book from './Components/Book';

//State

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <Book bookName="1984" writer="George Orwell" />
        <Book bookName="The Acst" writer="Dan" />
        <Book bookName="Eastern" writer="Johan" />
      </div>
    );
  }
}

export default App;
