import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown_two">
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/automotive/">Automotive</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/bfsi/">BFSI</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/chemicals/">Chemicals</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/construction-real-estate/">Construction & RealState</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/consumer-goods/">Consumer Goods</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/education/">Education</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/government/">Government</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/healthcare/">Healthcare</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/hi-tech/">Hi-Tech</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/life-science/">Life Sciences</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/manufacturing/">Manufacturing</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/professional-services/">Professional Services</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/industries/wholesale-distribution/">Wholesale Distribution</a></li>
      </ul>
      )
    }
}


export default Submenu;