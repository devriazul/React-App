import React, { Component } from 'react';
import './App.css';
import Book from './Components/Book';

//State

class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Acst", writer: "Dan" }
    ]
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    return (
      <div className="App">
        <h1>Book List</h1>
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[0].writer} />
      </div>
    );
  }
}

export default App;
