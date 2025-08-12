"use client";
import { User } from "@/Components/types"; // Import just User if API returns an array
import axios from "axios";
import { useState, useEffect } from "react";
import { SkewLoader } from "react-spinners";

const UserClient = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchingUser = async () => {
    try {
      const { data, status } = await axios.get<User[]>(
        "http://localhost:4000/users"
      );
      if (status !== 200) throw new Error("Failed to fetch users");
      setUsers(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingUser();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <SkewLoader loading={loading} color="#4f46e5" size={40} />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 text-red-700 px-6 py-4 rounded-lg shadow-md border border-red-300">
          <h2 className="text-lg font-bold mb-2">⚠ Error</h2>
          <p>{error}</p>
          <button
            onClick={fetchingUser}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow"
          >
            Retry
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        Users List
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
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

export default UserClient;
