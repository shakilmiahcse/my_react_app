// src/App.jsx
import React from 'react';
import GreetingFunction from './GreetingFunction';
import GreetingClass from './GreetingClass';
import './App.css';

function App() {
  const userName = 'Sajjad Vai';

  return (
    <div className="App">
      <h1>Welcome to Vite + React App</h1>
      <GreetingFunction name1={userName} />
      <GreetingClass name={userName} />
    </div>
  );
}

export default App;
