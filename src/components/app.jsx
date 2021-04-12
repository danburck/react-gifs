import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import GifList from './giflist';
import SearchBar from './search_bar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'l14qxlCgJ0zUk'
    };
    this.search('pokemon');
  }

  componentDidMount() {
    this.setState({
      gifs: [
        { id: 'a93jwI0wkWTQs' },
        { id: 'JHCcEc9vLvHZS' },
        { id: 'l14qxlCgJ0zUk' }
      ]
    });
  }

  search = (query) => {
    giphy('e3DW8zgUOAANon71h5NnKCzU3WO7dz72').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} key={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
