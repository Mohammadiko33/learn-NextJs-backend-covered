import { User } from '@/Components/types';
import axios from 'axios';
import React from 'react';

const UserServer = async () => {
  const { data } = await axios.get<User[]>("http://localhost:4000/users");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        Users List
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-500">@{user.username}</p>
            <p className="text-sm text-gray-600 mt-2">{user.email}</p>
            <p className="text-sm text-gray-600">{user.phone}</p>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline text-sm"
            >
              {user.website}
            </a>
            <div className="mt-4 text-sm text-gray-700">
              <p className="font-semibold">Address:</p>
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city} - {user.address.zipcode}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <p className="font-semibold">Company:</p>
              <p>{user.company.name}</p>
              <p className="italic text-gray-500">
                {user.company.catchPhrase}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserServer;
