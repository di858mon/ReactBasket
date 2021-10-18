import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../actions/index.js';

const AddUser = () => {
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const obj = event.target.elements;

    dispatch(addNewUser(obj.name.value, obj.password.value, obj.age.value));
    //dispatch(addNewUser('123', '123', '123'));
  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <input type="text" name="name" defaultValue="Саша" />
      </div>
      <div>
        <input type="text" name="password" defaultValue="шестьзвездочек" />
      </div>
      <div>
        <input type="number" name="age" defaultValue="69" />
      </div>
      <div>
        <button type="submit">Сохранить</button>
      </div>
    </form>
  );
};
export default AddUser;
