/**
 *
 */
'use strict';

import React from 'react';
const Header = require('./common/header');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;