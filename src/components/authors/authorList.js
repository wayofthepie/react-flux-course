/**
 *
 */
'use strict';

import { Link } from 'react-router';
let React = require('react');

class AuthorList extends React.Component {
  render() {
    let createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><Link to='manageAuthor' params={{id: author.id}}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      )
    };

    return (
      <div>
        <table className='table'>
          <tbody>
          <tr>
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