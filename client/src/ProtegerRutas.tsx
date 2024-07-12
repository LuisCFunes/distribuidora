import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/ContextToken";

export default function ProtegerRutas() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
