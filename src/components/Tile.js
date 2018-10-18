import React, {Component} from 'react';

export class Tile extends Component {
  render() {
    const image_names = {
      "white": "tile_with_white",
      "black": "tile_with_black",
      "empty": "empty_tile",
    }

    return <img className="tile" src={require(`../images/${image_names[this.props.tile.color]}.png`)} alt="" onClick={() => this.props.onClick(this.props.tile)}/>
  }
}

