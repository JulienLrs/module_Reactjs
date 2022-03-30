import React, {Component, Fragment} from "react";
import Annee from "./Annee";


    class Construction extends React.Component{
        constructor(props){
            super(props);
        }    
        render(){
            return(
                <>
                <h1>Bonjour !</h1>
                <h3>Nom : {this.props.nom}</h3>  
                <h3>Pays de construction : {this.props.pdc}</h3>
                <h3>Age : {this.props.age} ans</h3>
                <Annee age= {this.props.age}/>
                </>
            );
        }
    }

export default Construction;



