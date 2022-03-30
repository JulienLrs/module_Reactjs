// import React, {Component, Fragment} from "react";
// import AgePersonne from "./AgePersonne";


    class Joueur extends Component
    {// constructor(props){
    //     super(props);     >>>>   Plus besoin depuis la derniere mise a jour
    // }
        render(){
            return(
                <>
                <h3>Pseudo : {this.props.pseudo}</h3>
                <h3>Nom : {this.props.nom}</h3>  
                <h3>Prénom : {this.props.prenom}</h3>
                <h3>Age : {this.props.age} (annee)</h3>
                <h3>Point de vie : {this.props.pdv}</h3>
                <h3>Point magiques : {this.props.pm}</h3>
                <h3>Niveau : {this.props.niveau}</h3>
                <AgePersonne age= {this.props.age}/>
                </>
            );
        }
    }

// export default Joueur;

// nom 
// pays de construction
// annee de construction (page 2)