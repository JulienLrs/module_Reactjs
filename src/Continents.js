import React, {Component} from "react";
import { Route, Routes, Link, NavLink} from "react-router-dom";

class Continents extends Component {
    render() {
        return (
        <>
        <h3>Continents</h3>
        <nav>
            <NavLink to="/europe" activeClassName="active">Europe</NavLink>
            <NavLink to="/asia" activeClassName="active">Asia</NavLink>
            <NavLink to="/america" activeClassName="active">America</NavLink>
            <NavLink to="/africa" activeClassName="active">Africa</NavLink>
            <NavLink to="/oceania" activeClassName="active">Oceania</NavLink>
        </nav>
        </>
        );
    }
}

export default Continents;