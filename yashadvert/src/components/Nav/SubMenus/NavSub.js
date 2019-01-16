import React, { Component } from 'react';

import './style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li onClick="#">Sub-1</li>
        <li onClick="#">Sub-2</li>
        <li onClick="#">Sub-3</li>
      </ul>
      )
    }
}


export default Submenu;