import logo from './logo.svg';
import React from 'react';
import './index.css'
// https://www.npmjs.com/package/typed-css-modules


const hi = process.env.JS;
// const test = process.env.HELLO;
console.log(hi);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://localhost:8000/media/logo.svg" className="App-logo" alt="logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
