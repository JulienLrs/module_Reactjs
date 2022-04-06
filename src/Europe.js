import React, {Component, Fragment} from "react";
import axios from 'axios';



class Europe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            europe : []
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/region/europe')
            .then(res => {
                this.setState({europe: res.data});
            })
    }

    render() {
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th colspan = "4">Europe</th>
                    </tr>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Flag</th>
                        <th scope="col">Capital</th>
                        <th scope="col">Population</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.europe.map(detail =>
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

export default Europe;