import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="#">SAP</a></li>
        <li className="nav_li_sub"><a href="#">Mircosoft</a></li>
        <li className="nav_li_sub"><a href="#">Oracle</a></li>
        <li className="nav_li_sub"><a href="#">IBM</a></li>
        <li className="nav_li_sub"><a href="#">AWS</a></li>
        <li className="nav_li_sub"><a href="#">QAD</a></li>
      </ul>
      )
    }
}


export default Submenu;