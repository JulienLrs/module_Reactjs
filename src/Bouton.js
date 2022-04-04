import React, { Component } from 'react';

class Bouton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        clicks: 0,
        show: true
        };
}

IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
}
    DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
}
    ToggleClick = () => {
    this.setState({ show: !this.state.show });
}

render() {
    return (
        <div>
        <button onClick={this.IncrementItem}>Appuyez ici pour augmenter de 1</button>
        <button onClick={this.DecreaseItem}>Appuyez ici pour diminuer de 1</button>
        <button onClick={this.ToggleClick}>
            { this.state.show ? 'Cacher le compteur' : 'Coucou !' }
        </button>
        {this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </div>
    );
}
}

export default Bouton;