import React from 'react';
import User from '../User/User';

import './UsersList.scss';


const UsersList = () => {
  return (
    <div className="users-list">
      <User />
      <User />
      <User />
    </div>
  );
}

export default UsersList;