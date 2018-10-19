import React, {Component} from 'react';
import { GameBoard } from './GameBoard';

export class Game extends Component {
  componentDidMount() {
    const game_id = 55 // look idk ok
    window.api.trigger('Gamestates', 'full_game_state', {id: game_id}, data => {
      console.log("Got full game state up to now")
      console.log(data)
      this.setInitialState(data)
      this.addKeystrokeListener()
    })

    // subscribe to state updates from now on
    window.api.subscribe('Gamestates', 'latest_game_state', {id: game_id}, data => {
      console.log("Got latest game state update from new move")
      this.addIncrementalState(data)
    })
  
    // subscribe to endgame group aliveness updates
    window.api.subscribe('Gamestates', 'latest_endgame_state', {id: game_id}, data => {
      console.log("Got group aliveness update")
      this.addIncrementalState(data)
    })

  }

  setInitialState(data) {
    this.setState({history: data.history, displayedGame: data.history.length - 1})
  }
  
  render() {
    if (this.state) {
      console.log(this.state)
      return (
        <div>
          <GameBoard boardState={this.state.history[this.state.displayedGame]}></GameBoard>
        </div>
      )
    } else {
      return null
    }
  }

  addKeystrokeListener = () => {
    var keyMap = {
      39: 'right',
      37: 'left',
      38: 'up',
      40: 'down'
    }
    
    const keydown = (event) => {
      var key = keyMap[event.keyCode]
      if (key === 'right' && this.state.history.length > this.state.displayedGame + 1) {
        this.setState({displayedGame: this.state.displayedGame + 1})
      } else if (key === 'left' && this.state.displayedGame > 0) {
        this.setState({displayedGame: this.state.displayedGame - 1})
      }
    }
    
    window.addEventListener("keydown", keydown, false)
  }
}

