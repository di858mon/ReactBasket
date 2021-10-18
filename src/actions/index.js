import React from 'react';

export const addNewUser = (name, password, age) => ({
  type: 'ADD_USER',
  name,
  password,
  age,
});

export const addGoods = (id, title, img) => ({
  type: 'ADD_GOOD',
  id,
  title,
  img,
});
