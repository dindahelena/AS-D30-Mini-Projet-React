import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../services/Api";

export default function Navbar() {
  const { token, logout, userEmail } = useAuth();
  return (
    <nav className="bg-gray-100 p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {token && <Link to="/user/2">User Detail</Link>}
      </div>
      <div>
        {token ? (
          <>
            <span className="mr-2">{userEmail}</span>
            <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
