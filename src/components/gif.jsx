import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/200w.gif`;
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img className="gif" src={src} width="248" height="162" />
    );
  }
}

export default Gif;
