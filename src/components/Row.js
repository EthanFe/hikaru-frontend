import React, {Component} from 'react';
import { Tile } from './Tile';

export class Row extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.row.map((tile, index) => {
            return <Tile key={index} tile={tile} onClick={this.props.clickOnTile}/>
          })
        }
      </div>
    )
  }
}

