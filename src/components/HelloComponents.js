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
        <span className="green">Project...</span>
        <i className="fi fi-rr-user"></i>
        <i className="fi fi-rr-arrow-right"></i>
        <i className="fi fi-rr-book"></i>
        <i className="fi fi-rr-clean"></i>
      </div>
    );
  }
}

export default HelloComponent;
