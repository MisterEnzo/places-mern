import React from 'react'

import UserItem from './UserItem';

const UsersList = props => {
  if (props.users.length === 0){
    return (
      <div className="center">
        No Users Found.
      </div>
    );
  } 
  return (
    <ul className="users-list">
      {props.users.map((user) => {
        return (<UserItem 
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.placeCount}
        />
      )})}
    </ul>
  )
}

export default UsersList;