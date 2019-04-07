import React from 'react';

const style = {};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.bindHandlers();
  }

  bindHandlers () {}

  render () {
    return (
      <div style={style}>
        Hello World
      </div>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};
