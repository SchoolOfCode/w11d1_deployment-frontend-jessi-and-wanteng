import logo from './logo.svg';
import './App.css';
import {useState} from 'react';







function App() {

  const [pokemon,setPokemon]=useState("")
  const fetchInfo= async ()=>{
    fetch('process.env.POKEMON_API')
    .then(response => response.json())
    .then(data => setPokemon(data.name))
    ;
  }

  fetchInfo();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{pokemon}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to deploy with Netlify456
          
        </a>
      </header>
    </div>
  );
}

export default App;
