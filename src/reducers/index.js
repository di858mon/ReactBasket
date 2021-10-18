import React from 'react';
import { combineReducers } from 'redux';
import users from './users';
import goods from './goods';

export default combineReducers({
  users,
  goods,
});
