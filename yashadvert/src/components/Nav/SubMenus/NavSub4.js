import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="#">Automotive</a></li>
        <li className="nav_li_sub"><a href="#">BFSI</a></li>
        <li className="nav_li_sub"><a href="#">Chemicals</a></li>
        <li className="nav_li_sub"><a href="#">Construction & RealState</a></li>
        <li className="nav_li_sub"><a href="#">Consumer Goods</a></li>
        <li className="nav_li_sub"><a href="#">Education</a></li>
        <li className="nav_li_sub"><a href="#">Government</a></li>
        <li className="nav_li_sub"><a href="#">Healthcare</a></li>
        <li className="nav_li_sub"><a href="#">Hi-Tech</a></li>
        <li className="nav_li_sub"><a href="#">Life Sciences</a></li>
        <li className="nav_li_sub"><a href="#">Manufacturing</a></li>
        <li className="nav_li_sub"><a href="#">Professional Services</a></li>
        <li className="nav_li_sub"><a href="#">Wholesale Distribution</a></li>





      </ul>
      )
    }
}


export default Submenu;