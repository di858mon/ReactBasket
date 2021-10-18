import React from 'react';
import './style.css';
import AddUser from './components/AddUser.js';
import UserList from './containers/UserList';

export default function App() {
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  );
}
