import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../actions/';

export default class AddUser extends React.Component {
  formHandler(event) {
    const dispatch = useDispatch();

    event.preventDefault();
    console.log(event.target.elements);

    const nUser = event.target.elements;
    dispatch(
      addNewUser(nUser.name.value, nUser.password.value, nUser.age.value)
    );
  }

  render() {
    return (
      <>
        <form onSubmit={this.formHandler}>
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
      </>
    );
  }
}
