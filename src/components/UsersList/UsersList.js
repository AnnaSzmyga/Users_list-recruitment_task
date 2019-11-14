import React from 'react';
import User from '../User/User';

import './UsersList.scss';


const UsersList = ({ users }) => {
  return (
    <ol className="users-list">
      {
          users.map(user => <User key={user.id} user={user}/>)
      }
    </ol>
  );
}

export default UsersList;