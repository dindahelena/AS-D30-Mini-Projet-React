import React, { useState, useEffect } from "react";
import axios from "axios";
function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then(res => setUsers(res.data.data));
  }, [page]);
  return (
    <div>
      {users.map(u => <div key={u.id}>{u.first_name} {u.last_name}</div>)}
      <button onClick={() => setPage(page-1)} disabled={page===1}>Prev</button>
      <button onClick={() => setPage(page+1)}>Next</button>
    </div>
  );
}
export default UserList;
