import React from 'react';
import './style.css';

function CartItem(props) {

  return (
    <>
      <div id="cart"> 
        <div id="good">{props.title}</div>
        <div id="price">{props.price}</div>
        <div id="qty">{props.qty}</div>
        <div id="buttons">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
