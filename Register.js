import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://reqres.in/api/register", { email, password });
      setMessage("Register sukses: " + res.data.token);
    } catch {
      setMessage("Register gagal");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Daftar</button>
      <div>{message}</div>
    </form>
  );
}
export default Register;
