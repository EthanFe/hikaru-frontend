import React, {Component} from 'react';
import { Tile } from './Tile';

export class Row extends Component {
  render() {
    
    const tiles = []
    for (let i=0; i<9; i++) {
      tiles.push(<td className="gameboard-tile"><Tile y={this.props.y} x={i}></Tile></td>)
    }
    return (
      <div className="something">
        { tiles }
      </div>
    )
  }
}

