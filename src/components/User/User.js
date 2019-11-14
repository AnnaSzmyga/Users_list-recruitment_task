import React from 'react';
import './User.scss';

const User = ({ user }) => {
  return (
    <li className="user">{user.name}
        <span>{`@${user.username}`}</span>
    </li>
  );
}

export default User;