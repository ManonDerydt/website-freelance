import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <div>
            <Navbar />
            <h1>Bienvenue sur ma page d'accueil</h1>
            <p>Ceci est ma page d'accueil en React.</p>
        </div>

      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}

        <p>Hello world !</p>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      </header>
    </div>

  );


}

export default App;
