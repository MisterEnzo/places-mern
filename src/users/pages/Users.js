import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  let users = [
    // {
    //   id:1,
    //   name: 'enzo',
    //   image: 'balbablal',
    //   placeCount: 2
    // }
  ]
  return (
    <div>
      <h2>Users</h2>
      <UsersList users={users} />
    </div>
  )
}

export default Users;