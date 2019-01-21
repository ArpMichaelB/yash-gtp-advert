import React, { Component } from 'react';

import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="https://www.yash.com/technology/sap/">SAP</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/technology/microsoft/">Mircosoft</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/technology/oracle/">Oracle</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/technology/ibm/">IBM</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/technology/aws-services/">AWS</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/technology/qad-erp-services/">QAD</a></li>
      </ul>
      )
    }
}


export default Submenu;