import React from 'react';

const goods = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GOOD':
      console.log('Add new good');
      console.log(state);
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          img: action.img,
        },
      ];
    default:
      return state;
  }
};

export default goods;
