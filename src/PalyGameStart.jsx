import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PalyGamePlayersSubmit from './PalyGamePlayersSubmit';
//import palygamestart from './palygamestart.css';
import PalyGameStartStyles from './PalyGameStartStyles.css'
import PalyGamePlayerSubmitMenu from './PalyGamePlayerSubmitMenu';


class PalyGameStart extends Component {
  constructor() {
    super();
    this.state = {gameStarted: false};
  };

  startGame = () => {
   // this.setState({gameStarted: true});
  // this.props.onAddWord("GAVNO");
  }
y
  showStartMenu = () => {
    return (      
      <div className="start__menu">
  
        <div align="center" className="header">
          <span>P</span><span>A</span><span>L</span><span>I</span><span>N</span>
        </div>
  
        <div align="center" className="header2">
          <span>d</span><span>r</span><span>o</span><span>m</span><span>e</span>
        </div>
  
        <button align="center" className="button__start" title="Press this button to start the game" onClick={() => this.setState({gameStarted: true})}> Start Game </button>   
      </div>
      );
  }


  render() {
    console.log(this.props.testStore);
    return ( this.state.gameStarted ? <PalyGamePlayerSubmitMenu /> : this.showStartMenu() );
  }


}

export default PalyGameStart;
/*
export default connect(
  state => ({
    words: state.words
  }),
  dispatch => ({
    onAddWord: (word) => {
      dispatch({type: 'ADD_WORD', payload: word});
    }
  })
)(PalyGameStart);
*/