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
    this.state = {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
    }
  }

  setAuthorState(event) {
    let field = event.target.name;
    this.state.author[field] = event.target.value;
    return this.setState({author: this.state.author});
  }

  authorFormIsValid() {
    let formIsValid = true;

    this.setState({errors: {}});
    if (this.state.author.firstName.length < 1) {
      formIsValid = false;
      this.state.errors.firstName = 'First name must be at least 1 character.';
    }
    if (this.state.author.lastName.length < 1) {
      formIsValid = false;
      this.state.errors.lastName = 'Last name must be at least 1 character.';
    }
    this.setState({errors: this.state.errors});
    return formIsValid;
  }

  saveAuthor(event) {
    event.preventDefault(); // Stop browser default - i.e. POST
    if (!this.authorFormIsValid()) {
      return;
    }
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
          onSave={this.saveAuthor.bind(this)}
          errors={this.state.errors} />
      </div>
    );
  }
}

module.exports = ManageAuthorPage;