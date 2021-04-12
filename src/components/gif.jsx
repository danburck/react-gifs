/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
    // this.props.selectGif(this.props.id);
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      <img
        className="gif"
        src={src}
        width="248"
        height="162"
        onClick={this.handleClick}
        />
    );
  }
}

export default Gif;
