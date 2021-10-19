import React from 'react';
import './style.css';
import GoodsList from './containers/GoodsList';
import Cart from "./components/Cart"

export default function App() {
  return (
    <div>
      <GoodsList />
      <Cart />
    </div>
  );
}
