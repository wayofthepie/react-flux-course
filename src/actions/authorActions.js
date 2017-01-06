/**
 *
 */
'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
let AuthorApi = require('../api/authorApi');
let ActionTypes = require('../constants/actionTypes');

let AuthorActions = {
  createAuthor: (author) => {
    let newAuthor = AuthorApi.saveAuthor(author);

    // Dispatches to all the stores - author was created.
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor,
    });
  }
};

module.exports = AuthorActions;