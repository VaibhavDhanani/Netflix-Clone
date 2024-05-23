import React from 'react';

const UserProfileCard = ({ user }) => {

  return (
    <div className="flex items-start h-96 justify-center">
    <div className="rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto">
      <div className="px-6 py-4">
        <img
          className="mx-auto rounded-full w-52 h-52 object-cover object-center mb-4"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="user image"
        />
        <div>
          <h1 className="text-xl text-center text-gray-800 mb-1 font-black">{user.name}</h1>
          <h3 className="text-base text-center text-gray-600 mb-2 font-semibold uppercase">{user.role}</h3>
          <p className="text-base text-gray-600 text-center font-medium">{user.email}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default UserProfileCard;
