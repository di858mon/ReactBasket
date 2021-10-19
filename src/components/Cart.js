import React from 'react';
import './style.css';

function Cart() {
  const props = {
    title: "Описание товара",
    qty: "1 шт."
  };
  return (
    <>
      <div id="cart"> 
        <div id="good">{props.title}</div>
        <div id="qty">{props.qty}</div>
        <div id="buttons">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
