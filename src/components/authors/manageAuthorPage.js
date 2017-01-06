/**
 *
 */
'use strict';

import React from 'react';
let AuthorForm = require('./authorForm');

class ManageAuthorPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Manage authors</h1>
        <AuthorForm />
      </div>
    );
  }
}

module.exports = ManageAuthorPage;