import React, {Component, Fragment} from "react";
import Joueur from "./Joueur";

class App extends Component{
  render(){
    return(
    <>
    <Joueur pseudo= "Juju" nom= "Lrs" prenom= "Julien" pdv= "10000" pm= "2000" niveau= "100"/>
    <Joueur pseudo= "Riri" nom= "Duck" prenom= "Rigs" pdv= "1000" pm= "2000" niveau= "100"/>
    <Joueur pseudo= "Fifi" nom= "Duck" prenom= "Ronald" pdv= "1000" pm= "2000" niveau= "100"/>
    <Joueur pseudo= "Loulou" nom= "Duck" prenom= "Laugh" pdv= "1000" pm= "2000" niveau= "100"/>
    </>
    );
  }
}


export default App;