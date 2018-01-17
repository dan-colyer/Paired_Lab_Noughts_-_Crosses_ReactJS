import React from 'react';
import BoardComponent from '../components/boardComponent'
import isWin from '../models/calculateWinner'

class GamesContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      players: ["x", "o"],
      winner: null
    }

    this.handleTileClick = this.handleTileClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleTileClick(index) {
    const newBoard = Array.from(this.state.board);
    
    if (newBoard[index] === "") {
      newBoard[index] = this.state.players[0];
      const winner = isWin(newBoard);
      this.setState({board: newBoard, winner: winner});
      this.nextTurn();
    }
  }

  nextTurn() {
    const newPlayers = Array.from(this.state.players);
    newPlayers.push(newPlayers.shift())
    this.setState({players: newPlayers})
  }

  resetGame() {
    this.setState({board: ["", "", "", "", "", "", "", "", ""]})
  }

  render() {
    let winner = null;

    if(this.state.winner) {
    winner = <h1>{this.state.winner} wins</h1>
    }

    return(
      <div>
      <BoardComponent board={ this.state.board } handleTileClick={ this.handleTileClick } />
      {winner}
      <button onClick={this.resetGame}>Reset Game</button>
      </div>
    )
  }
}

export default GamesContainer;
