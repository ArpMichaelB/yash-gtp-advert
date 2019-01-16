import React, { Component } from 'react';
import YashLogo from '../../assets/images/yash-logo.svg';
import Sec from '../../hoc/Sec/Sec';
import NavSub1 from './SubMenus/NavSub1';
import NavSub2 from './SubMenus/NavSub2';
import NavSub3 from './SubMenus/NavSub3';
import NavSub4 from './SubMenus/NavSub4';
import NavSub5 from './SubMenus/NavSub5';



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

  <div className="logo"><img src={YashLogo} width="105em"></img></div>
  <div className="nav_items">
  <ul>
    <li className="nav_li"><a href="#">Digital Transformation</a>
    <NavSub1 />
    </li>
    <li className="nav_li"><a href="#">IT Outsourcing</a>
          <NavSub2 />
    </li>
    <li className="nav_li"><a href="#">Technology</a>
    <NavSub3 />
    </li>
    <li className="nav_li"><a href="#">Industries</a>
    <NavSub4 />
    </li>
    <li className="nav_li"><a href="#">Resources</a>
    <NavSub5 />
    </li>
    <li className="nav_li"><a href="#">Career</a></li>
  </ul>
  </div>
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