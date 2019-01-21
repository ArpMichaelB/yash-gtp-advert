import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../../utils/scroll';


import './../style.css';

class Submenu extends Component {
    render() {
      return (
        <ul className="dropdown">
        <li className="nav_li_sub"><a href="https://www.yash.com/news-room/blogs/">Blogs</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/news-room/events/">Events</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/news-room/press-releases/">Media</a></li>
        <li className="nav_li_sub"><a href="https://www.yash.com/news-room/webinars/">Webinars</a></li>
      </ul>
      )
    }
}


export default Submenu;