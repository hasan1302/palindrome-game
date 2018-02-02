import React, { Component } from 'react';
import PalyGame from './PalyGame';
import PalyGamePlayerSubmitMenuStyles from './PalyGamePlayerSubmitMenuStyles.css';


class PalyGamePlayersSubmit extends Component {
        constructor() {
            super();
            this.state = {
                playerOneName: "", 
                playerOneSubmited: false, 
                playerTwoName: "", 
                playerTwoSubmited: false, 
                gameStarted: false
            };
        }

        componentDidMount(){
            this.input.focus(); 
         }
    
        submitPlayer = (event) =>{
            if ((this.input.value.length > 2) && (this.input.value.length < 8)) {
                if (!this.state.playerOneSubmited) {
                    this.setState({playerOneName: this.input.value, playerOneScore: 0, playerOneSubmited: true});
                } else {
                    this.setState({playerTwoName: this.input.value, playerTwoScore: 0, playerTwoSubmited: true, gameStarted: true});
                }
            } else {
                alert("The name is too short or too long!");
            }
            this.input.value = "";
            this.input.focus(); 
            event.preventDefault();
        }

  
        showName = () => {
            return (
                <div align="center" className="header">
                    <span>N</span><span>A</span><span>M</span><span>E</span><span>:</span><span>{this.state.playerOneSubmited ? "2" : "1"}</span>
                </div>
            )
        }

        showSubmitMenu = () => {
            return (        
                <div className="player__submit__menu">
                    { this.showName() }
                    <form onSubmit={this.submitPlayer} >
                        <input type="text" ref={(input) => this.input = input} className="input__name" placeholder="Player Name" name="playerName" ></input>
                        <input className="submit__button" type="submit" value="Play" />
                    </form>
                </div>
                );
        }
    
        render() {
            return ( this.state.gameStarted ? <PalyGame playerOneName={this.state.playerOneName} playerTwoName={this.state.playerTwoName}/> : this.showSubmitMenu() )
      }
    

}

export default PalyGamePlayersSubmit;