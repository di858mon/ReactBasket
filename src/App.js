import React from 'react';
import './style.css';
import GoodsList from './containers/GoodsList';

import CartList from "./containers/CartList";

export default function App() {
  return (
    <div>
      <GoodsList />
      <CartList />
    </div>
  );
}
