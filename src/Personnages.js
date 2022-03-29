import React, {Component, Fragment} from "react";


    class Personnages extends Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <>
                <h3>Nom : {this.props.nom}</h3>  
                <h3>Prénom : {this.props.prenom}</h3>
                <h3>Age : {this.props.age}</h3>
                </>
            );
        }
    }

export default Personnages;