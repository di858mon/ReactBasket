import React from 'react';

const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('Add new user');
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

export default user;
