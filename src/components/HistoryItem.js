import React, {Component} from 'react';

export class HistoryItem extends Component {
  render() {
    const image_names = {
      "white": "tile_with_white",
      "black": "tile_with_black",
    }
    const color = this.props.boardState.next_player === 0 ? "black" : "white"

    const className = this.props.currentlyDisplayed ? "history-state-icon-selected" : "history-state-icon"
    return <img className={className} src={require(`../images/${image_names[color]}.png`)} alt=""/>
  }
}

