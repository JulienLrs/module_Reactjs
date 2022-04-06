import React, {Component} from "react";
import axios from "axios";


class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = { countries: []};
    }

componentDidMount(){
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
        this.setState({ countries: res.data});
    })
}

render(){
    return (

        
        <p id="mycountries">
            {this.state.countries.map(oneCountry => 
            <span>{oneCountry.name.common}</span>)}
        </p>
        );
    }
}

export default Countries;