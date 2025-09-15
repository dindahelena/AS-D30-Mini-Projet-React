import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(data => setUsers(data.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
}
