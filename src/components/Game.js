import React, {Component} from 'react';
import { GameBoard } from './GameBoard';

export class Game extends Component {
  componentDidMount() {
    const game_id = 55 // look idk ok
    window.api.trigger('Gamestates', 'full_game_state', {id: game_id}, data => {
      console.log("Got full game state up to now")
      console.log(data)
      this.setInitialState(data)
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
    this.setState(data)
  }
  
  render() {
    if (this.state) {
      const history = this.state.history
      return (
        <div>
          <GameBoard history={history}></GameBoard>
        </div>
      )
    } else {
      return null
    }
  }
}

