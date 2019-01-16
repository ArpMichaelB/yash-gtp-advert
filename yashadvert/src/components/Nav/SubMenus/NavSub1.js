import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="#">Big Data</a></li>
        <li className="nav_li_sub"><a href="#">Cloud Services</a></li>
        <li className="nav_li_sub"><a href="#">Data Sciences & Analytics</a></li>
        <li className="nav_li_sub"><a href="#">Mobility Services</a></li>
        <li className="nav_li_sub"><a href="#">Social Media Services</a></li>
        <li className="nav_li_sub"><a href="#">Robotic Process Automation</a></li>
        <li className="nav_li_sub"><a href="#">Automation Anywhere</a></li>
      </ul>
      )
    }
}


export default Submenu;