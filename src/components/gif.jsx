import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'Zk9mW5OmXTz9e'
    };
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.state.id}/200w.gif?cid=ecf05e470e4o8g09zz2jvmki7kb9pw6oprnxl7lqqhil1pq1&amp;rid=200w.gif`;

    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        className="gif"
        src={src}
        width="248"
        height="162" />
    );
  }
}

export default Gif;
