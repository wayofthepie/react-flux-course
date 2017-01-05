/**
 *
 */
'use strict';

let React = require('react');

class AuthorList extends React.Component {
  render() {
    let createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
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