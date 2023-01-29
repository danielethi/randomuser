import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);

  return (
    <div className='container'>
      {users.map(user => (
        <div key={user.login.uuid} className="user">
          <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <p>{`${user.name.first} ${user.name.last}`}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <button onClick={() => setSelectedUser(user)}>
            {selectedUser === user ? 'Hide' : 'Show'} DOB
          </button>
          {selectedUser === user && <p>{user.dob.date}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;

