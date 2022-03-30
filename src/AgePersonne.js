import React, {Component, Fragment} from "react";

function AgePersonne(props){
    let maintenant = new Date();
    let annee = maintenant.getFullYear();
    return(
    <div>
        <h1>Age : {props.age} - ({annee-props.age})</h1>
    </div>
    );
}

export default AgePersonne;