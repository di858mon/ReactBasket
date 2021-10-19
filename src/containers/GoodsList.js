import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods } from '../store/goodsSlice';
import Good from '../components/Good';

function GoodsList() {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();
  
  return (
    <>
      {goods.map((item) => (
        <Good
          title={item.title}
          price={item.price}
          articul={item.articul}
          key={item.articul}
        />
      ))}
    </>
  );
}

export default GoodsList;
