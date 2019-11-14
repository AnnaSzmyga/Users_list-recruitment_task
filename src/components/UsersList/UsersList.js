import React from 'react';
import User from '../User/User';

import './UsersList.scss';


const UsersList = ({ users }) => {
  return (
    <ul className="users-list">
      {
          users.map(user => <User key={user.id} user={user}/>)
      }
    </ul>
  );
}

export default UsersList;