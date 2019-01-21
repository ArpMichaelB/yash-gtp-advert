import React, { Component } from 'react';
import YashLogo from '../../assets/images/yash-logo.svg';
import Sec from '../../hoc/Sec/Sec';
import NavSub1 from './SubMenus/NavSub1';
import NavSub2 from './SubMenus/NavSub2';
import NavSub3 from './SubMenus/NavSub3';
import NavSub4 from './SubMenus/NavSub4';
import NavSub5 from './SubMenus/NavSub5';
import NavSub6 from './SubMenus/NavSub6';



import './style.css';


class Nav extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
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

  <div className="logo"><img src={YashLogo} width="130em" alt="yash-logo"></img></div>
  <div className="nav_items navWide">
  <ul>
    <li className="nav_li" ><a href="https://www.yash.com/digital-transformation/">Digital Transformation</a><i className="fas fa-angle-down arrow"></i>
    <NavSub1 />
    </li>
    <li className="nav_li"><a href="https://www.yash.com/it-outsourcing/">IT Outsourcing</a><i className="fas fa-angle-down arrow"></i>
          <NavSub2 />
    </li>
    <li className="nav_li"><a href="#0">Technology</a><i className="fas fa-angle-down arrow"></i>
    <NavSub3 />
    </li>
    <li className="nav_li"><a href="#0">Industries</a><i className="fas fa-angle-down arrow"></i>
    <NavSub4 />
    </li>
    <li className="nav_li"><a href="https://www.yash.com/news-room/">Resources</a><i className="fas fa-angle-down arrow"></i>
    <NavSub5 />
    </li>
    <li className="nav_li"><a href="https://www.yash.com/career/">Career</a><i className="fas fa-angle-down arrow"></i>
    <NavSub6 />
    </li>
  </ul>
  </div>

  <div className="navNarrow">
					<i className="fa fa-bars fa-2x burger_icon" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
          <ul>
    <li className="nav_li"><a href="https://www.yash.com/digital-transformation/">Digital Transformation</a>
    <NavSub1 />
    </li>
    <li className="nav_li"><a href="https://www.yash.com/it-outsourcing/" onClick={this.burgerToggle}>IT Outsourcing</a>
          <NavSub2 />
    </li>
    <li className="nav_li" onClick={this.burgerToggle} >Technology
    <NavSub3 />
    </li>
    <li className="nav_li" onClick={this.burgerToggle}>Industries
    <NavSub4 />
    </li>
    <li className="nav_li"><a href="https://www.yash.com/news-room/" onClick={this.burgerToggle}>Resources</a>
    <NavSub5 />
    </li>
    <li className="nav_li"><a href="https://www.yash.com/career/" onClick={this.burgerToggle}>Career</a>
    <NavSub6 />
    </li>
  </ul>
					</div>
				</div>
</nav>
          
    </Sec>
    
    );
    }

}


export default Nav;