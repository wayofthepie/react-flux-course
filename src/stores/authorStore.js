/**
 *
 */
'use strict';

import {EventEmitter} from 'events';
let Dispatcher = require('../dispatcher/appDispatcher');
let ActionTypes = require('../constants/actionTypes');
let _ = require('lodash');
const CHANGE_EVENT = 'change';
let _authors = [];


class AuthorStore extends EventEmitter {

  constructor() {
    super();
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAllAuthors() {
    return _authors;
  }

  getAuthorById(id) {
    return _.find(_authors, {id: id})
  }
}

let Store = new AuthorStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      Store.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      Store.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      let existingAuthor = _.find(_authors, {id: actions.author.is});
      let existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      Store.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, (author) => {
        return action.id === author.id;
      });
      Store.emitChange();
      break;
  }
});

module.exports = Store;