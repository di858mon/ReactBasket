import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import goodsArr from '../data/goods.json';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [
      {
        name: 'Товар 1',
        qty: 1,
        price: 10
      },
      {
        name: 'Товар 2',
        qty: 2,
        price: 20
      },
    ],
  },
  reducers: {},
});

export const {} = cartSlice.actions;
export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;
