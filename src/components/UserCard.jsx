import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="p-4 border rounded shadow">
      <img src={user.avatar} alt={user.first_name} className="w-20 h-20 rounded-full" />
      <h3 className="font-semibold">{user.first_name} {user.last_name}</h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <Link to={`/user/${user.id}`} className="text-blue-600 underline">Detail</Link>
    </div>
  );
}
