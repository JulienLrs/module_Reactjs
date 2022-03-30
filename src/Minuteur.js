import React, {Component} from "react";


class Minuteur extends Component {
    constructor(props){
        super(props);
        this.state = {
            minuteur : 50
        }
    }

    componentDidMount(){
        setInterval(()=> this.setState({ minuteur: this.state.minuteur - 1}), 200);
    }
    componentWillUnmount() {
        clearInterval(this.state.minuteur + 50);
    }
    render(){
        return (
            <div>
                <h2>Minuteur : {this.state.minuteur}</h2>
            </div>
        );
    }

    
}

export default Minuteur;


