import logo from './logo.svg';
import './App.css';
import { StateContenxt } from '.';
import { useContext } from 'react';

// Let create the store object

function App() {
  const state = useContext(StateContenxt);
  console.log(state)
  state.subscribe(()=>{
    console.log(state.getState());
  });
  state.dispatch({ type:"GOODMORNING",data:'SHIVKANYA'});
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
