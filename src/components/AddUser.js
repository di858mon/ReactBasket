import React from 'react';

export default class AddUser extends React.Component {
  formHandler(event) {
    console.log(event.target);
  }

  render() {
    return (
      <>
        <form onSubmit={this.formHandler}>
          <div>
            <input type="text" defaultValue="Саша" />
          </div>
          <div>
            <input type="text" defaultValue="шестьзвездочек" />
          </div>
          <div>
            <input type="number" defaultValue="69" />
          </div>
          <div>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      </>
    );
  }
}
