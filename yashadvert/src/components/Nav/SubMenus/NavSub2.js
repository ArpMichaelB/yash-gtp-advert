import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/application-services/">Application Services</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/captive-insourcing/">Captive Insourcing</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/infrastructure-management/">Infrastructure Managment Resources</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/strategic-consulting/">Strategic Consulting</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/testing/">Testing Services</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/outsourced-product-development/">Outsourced Product Development</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/managed-services/">Managed Services</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/system-integration/">Systems Integration</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/application-services/enterprise-modernization/">Enterprise Modernization</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/it-outsourcing/enterpise-solutions/">Enterprise Solutions</a></li>
      </ul>
      )
    }
}


export default Submenu;