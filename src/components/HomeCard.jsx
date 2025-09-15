import React from "react";

export default function HomeCard({ title, description }) {
  return (
    <div className="p-6 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
