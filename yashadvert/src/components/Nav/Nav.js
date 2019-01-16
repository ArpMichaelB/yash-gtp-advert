import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';
import Sec from '../../hoc/Sec/Sec';

import './style.css';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

render() {
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    
    return (
        <Sec>
          <nav 
          className={stickyClass}
          ref={(elem) => {
              this.nav = elem;
          }}
          role="navigation">

  <div className="logo">Logo</div>
  <ul>
    <li onClick="">Digital Transformation</li>
    <li onClick="#">IT Outsourcing
    
    </li>
    <li onClick="#">Technology</li>
    <li onClick="#">Industries</li>
    <li onClick="#">Resources</li>
    <li onClick="#">Career</li>
  </ul>
</nav>
          
        {/* <nav
            className={stickyClass}
            ref={(elem) => {
                this.nav = elem;
            }}
        >
      
        <div
            className="menu__item active from-top"
            onClick={(e) => this.scrollToPage('.about_gtp_content')}
            >
            About GTP
        </div>
        <div
            className="menu__item from-top"
            onClick={(e) => this.scrollToPage('.trainee_work_content')}
            >
            Trainee Work
        </div>
        <div
            className="menu__item from-top"
            onClick={(e) => this.scrollToPage('.whats_next_content')}
            >
            Whats Next
        </div>
    </nav> */}
    </Sec>
    );
    }

}


export default Nav;