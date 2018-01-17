import React from 'react';

class TileComponent extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleTileClick(this.props.id)
  }

  render() {

    return(
      <div onClick={this.handleClick}  className="tiles" >{this.props.value}</div>

  )}
}

export default TileComponent;
