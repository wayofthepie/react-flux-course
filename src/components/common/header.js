/**
 *
 */
'use strict';

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className='navBar navbar-default'>
        <div className='containerFluid'>
          <a href='/' className='navbar-brand'>
            <img src='/images/ele.jpg' />
          </a>
          <ul className='nav navbar-nav'>
            <li><a href='/'>Home</a></li>
            <li><a href='/#about'>About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Header;