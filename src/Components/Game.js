import React, { Component } from 'react';

import Equation from './Equation';
import Score from './Score';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameCurrent: this.newGame(),
      numQuestions: 0,
      numCorrect: 0
    };

    this.playGame = this.playGame.bind(this);
  }

  newGame() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return {
      value1,
      value2,
      value3,
      proposedAnswer
    };
  }

  getAnswer() {
    const { value1, value2, value3, proposedAnswer } = this.state.gameCurrent;
    return (value1 + value2 + value3) === proposedAnswer;
  }

  playGame(event) {
    const answer = this.getAnswer();
    const userChoice = JSON.parse(event.target.value);

    if (userChoice === answer) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
        numQuestions: currentState.numQuestions + 1
      }));
    } else {
      this.setState((currentState) => ({
        numQuestions: currentState.numQuestions + 1
      }));
    }

    this.setState({
      gameCurrent: this.newGame()
    })
  }

  render() {
    const { gameCurrent, numQuestions, numCorrect } = this.state;

    return (
      <div className="game">
        <h2>Mental Math</h2>
        <Equation gameCurrent={gameCurrent} />
        <button onClick={this.playGame} value={true} >True</button>
        <button onClick={this.playGame} value={false} >False</button>
        <Score numQuestions={numQuestions} numCorrect={numCorrect} />
      </div>
    );
  }
}

export default Game;
