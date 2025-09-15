import React from "react";

export default function EmailInfoModal({ email, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow max-w-sm">
        <h3 className="text-lg font-bold mb-2">Email Info</h3>
        <p>{email}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}
