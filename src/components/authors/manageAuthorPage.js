/**
 *
 */
'use strict';

import React from 'react';
let AuthorForm = require('./authorForm');

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {author: {id: '', firstName: '', lastName: ''} }
  }

  setAuthorState(event) {
    let field = event.target.name;
    this.state.author[field] = event.target.value;
    return this.setState({author: this.state.author});
  }

  render() {
    return (
      <div>
        <h1>Manage authors</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState.bind(this)} />
      </div>
    );
  }
}

module
  .exports = ManageAuthorPage;