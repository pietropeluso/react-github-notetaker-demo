import React from 'react';

export class Main extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

React.render(<Main />, document.getElementById("app"));