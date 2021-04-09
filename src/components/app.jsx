import React, { Component } from 'react';

import Gif from './gif';
import GifList from './giflist';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  render() {
    // TODO: fetch gifs from giphy api
    const gifs = [];


    return (
      <div>
        <div className="left-scene">
          <Gif />
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
