import React, { Component } from 'react';
import {Button, Icon, Navbar, NavItem} from 'react-materialize'
import './Uno.css';


class Uno extends Component {
  render() {
    return (
      <div>
      <Navbar brand='chocolate' right class="nav">
      <NavItem href='get-started.html'>Compra</NavItem>
      <NavItem href='components.html'>Conócenos</NavItem>
      <NavItem href='components.html'>Contacto</NavItem>
      </Navbar>
      </div>
    );
  }
}

export default Uno;
