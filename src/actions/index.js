import React from 'react';

export const addNewUser = (name, password, age) => ({
  type: "ADD_USER",
  name,
  password,
  age
})