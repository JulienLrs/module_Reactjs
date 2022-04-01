import React, {Component, Fragment} from "react";
import { Route, Routes, Link } from 'react-router-dom';
import "./Moncss.css";
import Home from "./Home";



class App extends Component{
  render(){
    return(
    <div>
      <Routes>
      <Route exact path='/home' element={<Home />}></Route>
      </Routes>
    </div>
    );
  }
}


export default App;







