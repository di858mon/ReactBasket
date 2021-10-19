import React from 'react';
import { selectCart } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

function CartList() {
  const cart = useSelector(selectCart);
  console.log(cart);
  return (
    <div>
      {cart.map((item) => {
        return <CartItem title={item.name} qty={item.qty} />;
      })}
    </div>
  );
}

export default CartList;
