// src/GreetingClass.jsx
import React, { Component } from 'react';

class GreetingClass extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Class Component</h2>
        <p>Hello, {name}! This is a class component.</p>
      </div>
    );
  }
}

export default GreetingClass;
