/**
 *
 */
'use strict';

import Dispatcher from '../dispatcher/appDispatcher';
let AuthorApi = require('../api/authorApi');
let ActionTypes = require('../constants/actionTypes');

let InitializeActions = {
  initApp: () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      },
    })
  }
};

module.exports = InitializeActions;