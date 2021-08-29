import React, { Component } from 'react';

let Person = (props) => {
    return (
        <div>
            <h1>Name: {props.name} and Age: {props.age} Years</h1>
            <h3>Extra Info: {props.children}</h3>
        </div>
    );
}

// class Person extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         return (
//             <div>
//                 <h1>Name: {this.props.name} and Age: {this.props.age} Years</h1>
//                 <h3>Extra Info: {this.props.children}</h3>
//             </div>
//         );
//     }
// }

export default Person;