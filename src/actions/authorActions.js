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
  },

  updateAuthor: (author) => {
    let updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor,
    });
  },

  deleteAuthor: (id) => {
    let updatedAuthor = AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id,
    });
  },
};

module.exports = AuthorActions;