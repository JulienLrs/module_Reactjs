import React, { Component } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Countries from "./Countries";
import Continents from "./Continents";
import Europe from "./Europe";
import Asia from "./Asia";
import America from "./America";
import Africa from "./Africa";
import Oceania from "./Oceania";


class App extends Component {
    render() {
        return (
            <div>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/countries" activeClassName="active">Worldwide Countries List</NavLink>
                    <NavLink to="/continents" activeClassName="active">Continents List</NavLink>
                    

                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/countries" element={<Countries />}></Route>
                    <Route exact path="/continents" element={<Continents />}></Route>
                    <Route exact path="/europe" element={<Europe />}></Route>
                    <Route exact path="/asia" element={<Asia />}></Route>
                    <Route exact path="/america" element={<America />}></Route>
                    <Route exact path="/africa" element={<Africa />}></Route>
                    <Route exact path="/oceania" element={<Oceania />}></Route>
                </Routes>
            </div>
        );
    }
}


export default App;








