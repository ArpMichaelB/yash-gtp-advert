import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="https://www.yash.com/digital-transformation/big-data/">Big Data</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/digital-transformation/cloud/">Cloud Services</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/digital-transformation/analytics/">Data Sciences & Analytics</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/digital-transformation/mobility-services/">Mobility Services</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/digital-transformation/social-media-services/">Social Media Services</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/digital-transformation/robotic-process-automation-from-yash/">Robotic Process Automation</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/digital-transformation/automation-anywhere/">Automation Anywhere</a></li>
      </ul>
      )
    }
}


export default Submenu;