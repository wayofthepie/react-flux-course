/**
 *
 */
'use strict';

let React = require('react');
import { Link } from 'react-router';
let AuthorStore = require('../../stores/authorStore');
let AuthorList = require('./authorList');

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: AuthorStore.getAllAuthors(),
    };
    this._onChange=this._onChange.bind(this);
  }

  _onChange() {
    this.setState({authors: AuthorStore.getAllAuthors()});
  }

  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
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