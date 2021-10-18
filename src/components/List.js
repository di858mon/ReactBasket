import React from 'react';

function List(data) {
  console.log(data.user);
  return (
    <div>
      <ul>
      {data.user.map((item) => {
        <li>item.name</li>;
      })}
      </ul>
      Test
    </div>
  );
}

export default List;
