import React, {Component, Fragment} from "react";
import Joueur from "./Joueur";

class App extends Component{
  render(){
    return(
    <>
    <Joueur pseudo= "Juju" nom= "Lrs" prenom= "Julien" age ="34" pdv= "10000" pm= "2000" niveau= "100"/>
    <Joueur pseudo= "Riri" nom= "Duck" prenom= "Rigs" age ="10" pdv= "1000" pm= "2000" niveau= "100"/>
    <Joueur pseudo= "Fifi" nom= "Duck" prenom= "Ronald" age ="11" pdv= "1000" pm= "2000" niveau= "100"/>
    <Joueur pseudo= "Loulou" nom= "Duck" prenom= "Laugh" age ="12" pdv= "1000" pm= "2000" niveau= "100"/>
    </>
    );
  }
}


export default App;