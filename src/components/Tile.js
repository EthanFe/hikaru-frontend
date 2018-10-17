import React, {Component} from 'react';

export class Tile extends Component {
  render() {
    
    return (
      <div>
        <img src={require('../images/empty_tile.png')} alt=""/> 
        {/* [{this.props.x}, {this.props.y}] */}
      </div>
    )
  }
}

