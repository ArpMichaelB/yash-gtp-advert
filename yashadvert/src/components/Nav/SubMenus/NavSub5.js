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
        <li className="nav_li_sub"><a href="#">Blogs</a></li>
        <li className="nav_li_sub"><a href="#">Events</a></li>
        <li className="nav_li_sub"><a href="#">Media</a></li>
        <li className="nav_li_sub"><a href="#">Webinars</a></li>
        <li><div className="sub_head">Graduate Training Program</div></li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.about_gtp_content')}><a
            ></a>About Graduate Training Program</li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.trainee_work_content')}><a
            ></a>Trainee Work</li>
        <li className="nav_li_sub" onClick={(e) => this.scrollToPage('.whats_next_content')}><a
            ></a>Whats Next?</li>
      </ul>
      )
    }
}


export default Submenu;