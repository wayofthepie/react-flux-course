/**
 *
 */
'use strict';

import {Link} from 'react-router';
let React = require('react');
let AuthorActions = require('../../actions/authorActions');
let toastr = require('toastr');

class AuthorList extends React.Component {

  deleteAuthor(id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted.');
  }

  render() {
    let createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href='#' onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
          <td><Link to={{ pathname:'manageAuthor', state:{id: author.id} }}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      )
    };

    return (
      <div>
        <table className='table'>
          <tbody>
          <tr>
            <th>Delete?</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authors: React.PropTypes.array.isRequired
};

module.exports = AuthorList;