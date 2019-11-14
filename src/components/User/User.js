import React from 'react';
import './User.scss';

const User = ({ user }) => {
  return (
    <li className="user">
      <span>{user.name}</span>
      {`@${user.username}`}
    </li>
  );
}

export default User;