import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

//Lets create the store object

// let store = createStore();
let rootReducer = (oldState='ANIL',action)=>{ //default argument
  let newState = oldState;

  if(action.type === 'GOODMORNING'){
    newState = action.data
    return newState
  }
  if(action.type === 'GOODAfternoon'){
    newState = action.data
    return newState
  }
  return newState;
}

let store = createStore(rootReducer);


store.subscribe(function(){
  //console.log('New DATA IS ',store.getState());
});

store.dispatch({ type:"GOODMORNING",data:'SHIVKANYA'});
store.dispatch({ type:"GOODAfternoon",data:'Abhishek'});
store.dispatch({ type:"GOODAfternoon",data:'Abhishek'});

//console.log(store);

export const StateContenxt =  createContext()


ReactDOM.render(
  <React.StrictMode>
    <StateContenxt.Provider value={store} >
        <App />
    </StateContenxt.Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
