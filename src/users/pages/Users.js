import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  let users = [
    {
      id:1,
      name: 'enzo',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      placeCount: 2
    }
  ]
  return (
    <div>
      <h2>Users</h2>
      <UsersList users={users} />
    </div>
  )
}

export default Users;