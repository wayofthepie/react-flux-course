/**
 *
 */
'use strict';

import React from 'react';

class AuthorForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor='firstName'>First Name</label>
        <input type='text'
               name='firstName'
               className='form-control'
               placeholder='First Name'
               ref='firstName'
               value=''/>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text'
               name='lastName'
               className='form-control'
               placeholder='Last Name'
               ref='lastName'
               value=''/>
      </form>
    );
  }
}

module.exports = AuthorForm;