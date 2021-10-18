import React from 'react';

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('Add new user');
      console.log(state);
      return [
        ...state,
        {
          name: action.name,
          password: action.password,
          age: action.age,
        },
      ];
    default:
      return state;
  }
};

export default users;
