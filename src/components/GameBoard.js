import React, {Component} from 'react';
import { Row } from './Row';

export class GameBoard extends Component {
  render() {
    const rows = []
    for (let i=0; i<9; i++) {
      rows.push(<Row y={i}></Row>)
    }
    return (
      <table className="gameboard">
        <tr>{ rows }</tr>
      </table>
    )
  }
}

