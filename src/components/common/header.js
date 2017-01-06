/**
 *
 */
'use strict';

import React from "react";
import { IndexLink, Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <ul className='nav navbar-nav'>
            <li><IndexLink to='/'>Home</IndexLink></li>
            <li><Link to='authors'>Authors</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='about-us'>(Should redirect to About.)</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Header;