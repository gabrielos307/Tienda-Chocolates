import React, { Component } from 'react';
import {Button, Card, Row, Col } from 'react-materialize';
import './App.css';
import Uno from './Uno';
import Dos from './Dos';
import Footers from './Footers';

class App extends Component {
  render() {
    return (
      <div>
        <Uno />
        <Dos />
        <Footers />
      </div>
    );
  }
}

export default App;
