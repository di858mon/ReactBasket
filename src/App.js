import React from 'react';
import './style.css';
import AddUser from './components/AddUser.js';
import Goods from './containers/Goods.js';

export default function App() {
  return (
    <div>
      <AddUser />
      <hr/>
      <Goods />
    </div>
  );
}
