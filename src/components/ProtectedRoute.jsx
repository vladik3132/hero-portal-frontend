import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((usr) => {
      setUser(usr);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return <div style={{ color: "white", padding: 20 }}>Завантаження...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
