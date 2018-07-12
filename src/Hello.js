import React, { Component } from 'react';

class Label extends Component {
  render() {
    const { children } = this.props;

    return (
      <span style={{ color: 'red' }}>{ children }</span>
    )
  }
}

class Hello extends Component {
  render() {
    return (
      <div>Hello, <Label>World</Label></div>
    )
  }
}

export default Hello;
