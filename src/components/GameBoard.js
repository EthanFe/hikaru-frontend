import React, {Component} from 'react';
import { Row } from './Row';

export class GameBoard extends Component {
  render() {
    const stones = this.getRowsFromGroups()
    return (
      <div>
        {
          stones.map((row, index) => {
            return <Row key={index} row={row} clickOnTile={this.clickOnTile}/>
          })
        }
      </div>
    )
  }

  getRowsFromGroups() {
    const size = 9
    let rows = [...Array(size)].map(element => Array(size));
    const groups = this.props.boardState.board
    // debugger
    // add tiles with stones
    for (const group of groups) {
      for (const stone of group) {
        const x = stone[0][0]
        const y = stone[0][1]
        if (rows[y] === undefined) { rows[y] = [] }
        rows[y][x] = {color: stone[1], x: x, y: y, alive: true}
      }
    }
    // add empty tiles
    for (let y=0; y<size; y++) {
      for (let x=0; x<size; x++) {
        if (rows[x][y] === undefined)
          rows[x][y] = {color: "empty", x: x, y: y, alive: true}
      }
    }
    return rows
  }

  clickOnTile = (tile) => {
    console.log(`Clicked on ${tile.x}, ${tile.y}`)
  }
}

