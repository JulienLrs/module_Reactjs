import React, {Component, Fragment} from "react";


    class Joueur extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <>
                <h3>Pseudo : {this.props.pseudo}</h3>
                <h3>Nom : {this.props.nom}</h3>  
                <h3>Prénom : {this.props.prenom}</h3>
                <h3>Point de vie : {this.props.pdv}</h3>
                <h3>Point magiques : {this.props.pm}</h3>
                <h3>Niveau : {this.props.niveau}</h3>
                </>
            );
        }
    }

export default Joueur;