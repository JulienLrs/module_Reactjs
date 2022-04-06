import React, {Component, Fragment} from "react";
import axios from 'axios';



class Africa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            africa : []
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/region/africa')
            .then(res => {
                this.setState({africa: res.data});
            })
    }

    render() {
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th colspan = "4">Africa</th>
                    </tr>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Flag</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Population</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.africa.map(detail =>
                    <tr>
                        <td>{detail.name.common}</td>
                        <td><img src={detail.flag.png} alt="flag"/></td>
                        <td>{detail.capital}</td>
                        <td>{detail.population}</td>
                    </tr>
                    )}
                </tbody>    
            </table>
            </>
        );
    }
}

export default Africa;