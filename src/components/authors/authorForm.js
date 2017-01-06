/**
 *
 */
'use strict';

import React from 'react';
let Input = require('../common/textInput');

class AuthorForm extends React.Component {
  render() {
    return (
      <form>
        <Input name='firstName'
               label='First Name'
               value={this.props.author.firstName}
               onChange={this.props.onChange} />
        <br />
        <Input name='lastName'
               label='Last Name'
               value={this.props.author.lastName}
               onChange={this.props.onChange} />
        <br />

        <input type='submit' value='Save' className='btn btn-default' onClick={this.props.onSave} />
      </form>
    );
  }
}

module.exports = AuthorForm;