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
        <ul className="dropdown">
        <li><div className="sub_head">Graduate Training Program:</div></li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.about_gtp_content')}><a
            >About Graduate Training Program</a></li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.trainee_work_content')}><a
            >Trainee Work</a></li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.whats_next_content')}><a
            >Whats Next?</a></li>
      </ul>
      )
    }
}


export default Submenu;