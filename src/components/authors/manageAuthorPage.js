/**
 *
 */
'use strict';

import React from 'react';
let toastr = require('toastr');
let AuthorForm = require('./authorForm');
let AuthorApi = require('../../api/authorApi');

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {author: {id: '', firstName: '', lastName: ''}}
  }

  setAuthorState(event) {
    let field = event.target.name;
    this.state.author[field] = event.target.value;
    return this.setState({author: this.state.author});
  }

  saveAuthor(event) {
    event.preventDefault(); // Stop browser default - i.e. POST
    AuthorApi.saveAuthor(this.state.author);
    toastr.success("Author saved.");
    this.props.router.push('authors'); // Redirect to authors
  }

  render() {
    return (
      <div>
        <h1>Manage authors</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState.bind(this)}
          onSave={this.saveAuthor.bind(this)} />
      </div>
    );
  }
}

module
  .exports = ManageAuthorPage;