import React, {Component, Fragment} from "react";
import Joueur from "./Joueur";

class App extends Component{
  render(){
    return(
    <>
    <Joueur pseudo= "Juju" nom= "Lrs" prenom= "Julien" pdv= "10000" pm= "2000" niveau= "100"/>
    </>
    );
  }
}


export default App;