import React from 'react';

function Good(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.price}</p>
      <button className="add-to-cart">Add to cart</button>
    </div>
  );
}

export default Good;
