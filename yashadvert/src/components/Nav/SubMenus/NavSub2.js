import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="#">Application Services</a></li>
        <li className="nav_li_sub"><a href="#">Captive Insourcing</a></li>
        <li className="nav_li_sub"><a href="#">Infrastructure Managment Resources</a></li>
        <li className="nav_li_sub"><a href="#">Strategic Consulting</a></li>
        <li className="nav_li_sub"><a href="#">Testing Services</a></li>
        <li className="nav_li_sub"><a href="#">Outsourced Product Development</a></li>
        <li className="nav_li_sub"><a href="#">Managed Services</a></li>
        <li className="nav_li_sub"><a href="#">Systems Integration</a></li>
        <li className="nav_li_sub"><a href="#">Enterprise Modernization</a></li>
        <li className="nav_li_sub"><a href="#">Enterprise Solutions</a></li>
      </ul>
      )
    }
}


export default Submenu;