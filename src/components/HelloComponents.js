import { Component } from 'react';
import React from 'react';

class HelloComponent extends Component {
  state = {
    name: 'Planthor',
    year: '2021',
  };
  render() {
    return (
      <div>
        <span className="green">{this.state.name} Project.. </span>
      </div>
    );
  }
}

export default HelloComponent;
