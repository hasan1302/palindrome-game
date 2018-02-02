import React, { Component } from 'react';
import GameControlsStyles from './GameControlsStyles.css';

class GameControls extends Component {

    submitWord = (event) => {
        alert("aga")
        event.preventDefault();
    }

    render() {
        return (                    
                <div className="game__controls">
                    <Timer timer={this.props.timerEnd}/>

                    <p align="center">{this.props.timer}</p>

                    <form onSubmit={this.submitWord} align="center">
                        <input className="inputWord" type="text" placeholder="Any Palyndrome Word" name="palyndrome text"  required></input>
                        <input className="buttonInputWord" type="submit" value="SUBMIT" />
                    </form>

                </div>

            )
    }
}

class Timer extends Component {
    render() {
        return (                
             <div className="timer"> 
                <p align="center"> {this.props.timer} </p>
            </div>
            )
    }
}

export default GameControls;
