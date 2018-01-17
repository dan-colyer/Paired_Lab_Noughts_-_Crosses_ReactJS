import React from 'react';
import TileComponent from './tileComponent'

class BoardComponent extends React.Component {

  render() {

    const tiles = this.props.board.map((tile, index) => {
      return(
        <TileComponent value={tile} id={ index } key= { index } handleTileClick={this.props.handleTileClick } />
        )
    })
    return(
      <div className="flex">
        {tiles}
      </div>
    )
  }
}

export default BoardComponent;
