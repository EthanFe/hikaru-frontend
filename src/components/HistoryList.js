import React, {Component} from 'react';
import { HistoryItem } from './HistoryItem';

export class HistoryList extends Component {
  render() {
    return (
      <div className="history-list">
        {
          this.props.boardStates.map((boardState, index) => {
            return <HistoryItem key={index} boardState={boardState} currentlyDisplayed={index === this.props.currentlyDisplayed}></HistoryItem>
          })
        }
      </div>
    )
  }
}

