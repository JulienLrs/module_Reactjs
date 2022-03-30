import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';


// function App(){ // 3 "p" pour eviter le conflit avec le "import App"
  // return <h1>Coucou</h1>;
// }
// const element = <Appp />; plus besoin d'appeler sa variable avec reactjs


ReactDOM.render(<App />,document.getElementById('root'));
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
