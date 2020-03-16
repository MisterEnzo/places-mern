import React from 'react'

const UserItem = (props) => {
  return (
    <li>
      ID: {props.id}
      name: {props.name}
      image: {props.image}
      place count: {props.placeCount}
    </li>
  )
}

export default UserItem;