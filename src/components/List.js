import React from 'react';

function List(data) {
  console.log(data.user);
  return (
    <div>
      <ul>
      {data.users.map((item, index)=> 
        <li key={index}>{item.name}</li>
      )}
      </ul>
      Test
    </div>
  );
}

export default List;
