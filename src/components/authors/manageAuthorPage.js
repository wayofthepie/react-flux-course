/**
 *
 */
'use strict';

import React from 'react';
import {withRouter} from 'react-router';
let toastr = require('toastr');
let AuthorForm = require('./authorForm');
let AuthorActions = require('../../actions/authorActions');
let AuthorStore = require('../../stores/authorStore');

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {id: '', firstName: '', lastName: ''},
      saved: false,
      errors: {},
    }
  }

  // Before component has mounted. setState called here will not cause a re-render
  // because this happens before the render occurs.
  componentWillMount() {
    let authorId = this.props.params.id; // from path 'author/:id'

    if (authorId) {
      // if there is a param, get info about the author
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }

  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      if (!this.state.saved) {
        return 'You have unsaved information, are you sure you want to leave this page?'
      }
    })
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
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }
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

module.exports = withRouter(ManageAuthorPage);