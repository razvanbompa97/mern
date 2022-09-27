import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Bompa Razvan',
      image:
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
