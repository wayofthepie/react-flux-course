/**
 *
 */
'use strict';

let React = require('react');
import { Link } from 'react-router';
let AuthorApi = require('../../api/authorApi');
let AuthorList = require('./authorList');

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
    };
  }

  componentWillMount() {
    this.setState({authors: AuthorApi.getAllAuthors()});
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to='author' className='btn btn-default'>Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
}

module.exports = AuthorPage;