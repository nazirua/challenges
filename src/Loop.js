import React from 'react';
import './style.css';
import users from './user-data.js';


const Loop = () => {

  return (
    <div className="App">
      <div className="page-deets">
        <h1>Looping over an array and display data</h1>
      </div>

      <div className="users">
        {users.map((user, value)=> (
          <div key={value} className='user-card'>
            <strong>{user.name}</strong>
            <p>{user.location}</p>
            <p>{user.car}</p>
            <p>{user.colour}</p>
          </div>
        ))}
      </div>
    </div>
  );
      
}

export default Loop;
