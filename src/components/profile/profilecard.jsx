import React from 'react';

const UserProfileCard = ({ user }) => {

  return (
    <div className="flex items-start justify-center">
      <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <img
          className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="user image"
        />
        <h1 className="text-base text-black">{user.name}</h1>
        <h3 className="text-base">{user.role}</h3>
        <p className="text-base">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
