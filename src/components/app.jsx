import React, { Component } from 'react';

import Gif from './gif';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <Gif/>
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
