import React, { Component } from "react";

export default class R010_Variable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var varName = 'react';
    console.log('varName1 : ' + varName);
    var varName = '200';
    console.log('varName2 : ' + varName);

    let letName = 'react';
    console.log('letName1: ' + letName);
    letName = 'let200';
    console.log('letName2: ' + letName);
    // let letName = '200';

    const constName = 'react';
    console.log('constName : ' + constName);
    // constName = 200;
  }
  render() {
    return (
      <h2>[THIS IS Variable]</h2>
    );

  }
}
