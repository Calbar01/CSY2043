import React from 'react';
import ReactDOM from 'react-dom';

// Building a class component
// class Student extends React.Component {
//     render(){
//         return <h2>I am a Student</h2>;
//     }
// }

// This is how we build a function component
// function Student(){
//     return <h1>I am a Student of type function</h1>;
// }

//This is how we build a class component with a constructor
class Student extends React.Component {
    constructor(){
        super();
        this.state = {webDesign: "Dislike"};
    }
    render(){
        return <h2>I am a Student who {this.state.webDesign} web design</h2>;
    }
}

//Rendering the statement
ReactDOM.render(<Student />, document.getElementById('root'));

