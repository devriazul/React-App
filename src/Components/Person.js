import React from 'react';

let Person = (props) => {
    return (
        <div>
            <h1>Name: {props.name} and Age: {props.age} Years</h1>
            <h3>Extra Info: {props.children}</h3>
        </div>
    );
}

export default Person;