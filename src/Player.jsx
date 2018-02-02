import React, { Component } from 'react';
import {cuteWords} from './CuteWords.js';
import PlayerStyle from './PlayerStyle.css';

class PlayerName extends Component {
    render() {
        return (<div align="center" className="header"> {cuteWords(this.props.name)} </div>)
    }
}

class PlayerWords extends Component {
    render() {
        const position = ( this.props.position === "first" ? "player__one__words" : "player__two__words" );
        const words = [];
        console.log(this.props.position)
        if (this.props.words.length > 0) {
            this.props.words.map((item, el) => {
                words.push(<div key={el} align="center" className="header"> {cuteWords(item)} </div>);
            })
        }
      return (
            <div className={position}>
                {words}
            </div>
            );
    }
}

class Player extends Component {
    render() {
        return (
                <div className={this.props.style}>
                    <PlayerName name={this.props.name}/>
                    <PlayerWords words={this.props.words} position="first"/>
                </div>
        )

    }
}


export default Player;