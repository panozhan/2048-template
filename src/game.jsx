import React from 'react';
import './game.scss';

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id='board'></div>;
    }
}

export default Game;