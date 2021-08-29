import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'

//Functional Components

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Person />
//     </div>
//   );

// }

//Class components

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Person name="Rahim" age="30" >I am info of person</Person>
        <Person name="Karim" age="20" />
        <Person name="Jasim" age="10" />
        <Person name="Heron" age="31" />
        <Person name="Mahin" age="33" />
      </div>
    );
  }
}

export default App;
