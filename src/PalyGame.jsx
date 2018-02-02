import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player.jsx';
import GameControls from './GameControls.jsx'
//import PlayerWords from './PlayerWords';
import PalyGameStyles from './PalyGameStyles.css';

const secondsPerTurn = 3000;
const secondsPerGame = 60000;



function palindrome(str) {
    if(str.replace(/[^\w\s]|_/g, "").toLowerCase() === str.replace(/[^\w\s]|_/g, "").toLowerCase().split("").reverse().join("")){
      return true;
    } else {
      return false;
    }
  }

  const styleRed = {
    color: 'red',
  };

class PalyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playerOneName: this.props.playerOneName, 
        playerOneWords: [],
        playerOneScore: 0, 

        playerTwoName: this.props.playerTwoName,
        playerTwoWords: [], 
        playerTwoScore: 0, 

        playerTurn: this.props.playerOneName,
        word: "",
        words: [""],
        timer: secondsPerTurn,
        timerEndGame: secondsPerGame,
        winner: "",
        gameFinished: false
    }
  };

  componentDidMount() {
      const intervalId = setInterval(this.timer, 1000);
      const intervalIdEndGame = intervalId;
  }

  gameOver = () =>{
      this.setState({
        winner: (this.state.playerOneScore > this.state.playerTwoScore) ? this.state.playerOne : this.state.playerTwo,
        gameFinished: true,
    });
    alert("winner is  : " + this.state.winner);
  }

  restartGame = () =>{
      this.setState({
          playerOneScore: 0,
          playerTwoScore: 0,
          playerOneWords: [],
          playerTwoWords: [],
          words: [""],
          gameFinished: false,
          playerTurn: this.state.winner,
          timer: secondsPerTurn,
          timerEndGame: secondsPerGame
      })
  }

 

  timer = () =>{
      this.setState({timer: this.state.timer-1, timerEndGame: this.state.timerEndGame-1})

      if (this.state.timerEndGame === 0) {
          this.gameOver();
      }
      if (this.state.timer === 0) {
            this.addScore();
      }
  }

  addScore = (word="") => {
      let score;
    if ((word.length > 0) && (word.length < 8)) {
        (this.state.playerTurn === this.state.playerOne ? this.state.playerOneWords.push(word) : this.state.playerTwoWords.push(word))
    }
    if (this.state.playerTurn === this.state.playerOne) {
        score = ++this.state.playerOneScore
        this.setState({playerOneScore: score})
    } else {
        score = ++this.state.playerTwoScore
        this.setState({playerTwoScore: score})
    }
    this.setState({timer: secondsPerTurn});
  }
  
  submitWord = (event) =>{ 
        if (palindrome(this.state.word) === true) {
            if (this.state.word.length >3) {
                if (this.state.words.includes(this.state.word)) {
                    alert("This word was said");
                } else {
                    this.addScore(this.state.word);
                };
            } else {
                alert("This is too short");
            } 
        }else {
            alert("Your word is not a palyndrome!");
        }
        this.setState({
            playerTurn: this.state.playerTurn !== this.state.playerOne ? this.state.playerOne : this.state.playerTwo,
            word: ""
        });
    event.preventDefault();
  }

  typingWord = (event) => {
    if (/\d/.test(event.target.value)) {
        alert("Your cant type numbers!");
    } else {
      this.setState({word: event.target.value})
    }
  }

 

  showEndGame = () =>{
    return (
      <div>
          <h1>The winner is : {this.state.winner} with scores - {this.state.playerOne}:{this.state.playerOneScore}, {this.state.playerTwo}:{this.state.playerTwoScore}</h1>
          <button onClick={this.restartGame}> Restart </button>
      </div>
    );
}
/*

<Player name={this.state.playerTwoName} words={this.state.playerTwoWords} position="right"/>
*/
  showGame = () =>{//<PlayerWords  playerName={this.state.playerOne} playerWords={this.state.playerOneWords}/> 
    return (
        

                <div className="game__menu">
                    <Player style='player__one' name={this.state.playerOneName} words={this.state.playerOneWords} position='left'/>
                    <Player style='player__two'name={this.state.playerTwoName} words={this.state.playerTwoWords} position='right'/>
                    <GameControls timerEnd={this.state.timerEndGame} timer={this.state.timer}/>
                
                </div>
            );
    }


  render() {
    return ( (this.state.gameFinished === false) ?this.showGame() :this.showEndGame() )
  };
}

/*
          

                    <Timer timer={this.state.timerEndGame}/>


                    <div className="game__controls">
                        <h1 align="center">{this.state.timer}</h1>
                        <form onSubmit={this.submitWord} >
                            <input className="inputWord" onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" value={this.state.word} required></input>
                            <input className="buttonInputWord" type="submit" value="SUBMIT" />
                        </form>
                    </div>

showGame = () =>{//<PlayerWords  playerName={this.state.playerOne} playerWords={this.state.playerOneWords}/> 
    return (
            <div>

                <div className="game__menu">

                    <Player name={this.state.playerOneName} words={this.state.playerOneWords}/>
                    <div className="player__one">
                        <div align="center" className="header">
                            {cuteWords(this.state.playerOneName)}
                        </div>
                    </div>

                    <div className="timer"> 
                        <h1 align="center"> {this.state.timerEndGame} </h1>
                    </div>
     

                    <div className="player__two">
                        <div align="center" className="header">
                            {cuteWords(this.state.playerTwoName)}
                        </div>
                    </div>
  
                <div className="player__one__words">
                    <h1>{this.state.playerOneWords[0]}</h1>
                </div>

                <div className="player__two__words">
                    <h1>{this.state.playerTwoWords}</h1>
                </div>

                </div>

          
                <div className="game__controls">
                <h1 align="center">{this.state.timer}</h1>
                <form onSubmit={this.submitWord} >
                    <input className="inputWord" onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" value={this.state.word} required></input>
                    <input className="buttonInputWord" type="submit" value="SUBMIT" />
                </form>
                </div>
                

            </div>
            );
    }

*/

PalyGame.propTypes = {
    playerOneName: PropTypes.string,
    playerTwoName: PropTypes.string
}

PalyGame.defaultProps = {
    playerOneName: "P-1",
    playerTwoName: "P-2"
}

export default PalyGame;
