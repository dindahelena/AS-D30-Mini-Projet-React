import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../services/Api";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  if (!token) return <Navigate to="/login" replace />;
  return children;
}
