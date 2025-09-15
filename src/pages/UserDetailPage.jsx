import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmailInfoModal from "../components/EmailInfoModal";

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!user) return <div className="p-6">User tidak ditemukan</div>;

  return (
    <div className="max-w-sm mx-auto p-6 border rounded shadow mt-6 text-center">
      <img src={user.avatar} alt={user.first_name} className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="text-xl font-semibold mt-2">{user.first_name} {user.last_name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <button onClick={() => setShowModal(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Show Email
      </button>
      {showModal && <EmailInfoModal email={user.email} onClose={() => setShowModal(false)} />}
    </div>
  );
}
