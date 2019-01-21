import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../../utils/scroll';


import './../style.css';

class Submenu extends Component {
  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }
    render() {
      return (
        <ul className="dropdown_two">
        <li><div className="sub_head">Graduate Training Program:</div></li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.about_gtp_content')}>
        About Graduate Training Program
        </li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.trainee_work_content')}>
        Trainee Work</li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.whats_next_content')}>
        Whats Next?</li>
      </ul>
      )
    }
}


export default Submenu;