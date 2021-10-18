import React from 'react';
import { useDispatch } from 'react-redux';
import { addGoods } from '../actions';

const Goods = () => {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    let it = event.target.elements;
    console.log(it);
    dispatch(addGoods(it.id.value, it.title.value, it.image.value));
  };

  return (
    <form onSubmit={formHandler}>
      <div>
        <input type="text" name="id" defaultValue="Саша" />
      </div>
      <div>
        <input type="text" name="title" defaultValue="шестьзвездочек" />
      </div>
      <div>
        <input type="text" name="image" defaultValue="69" />
      </div>
      <div>
        <button type="submit">Сохранить</button>
      </div>
    </form>
  );
};

export default Goods;
