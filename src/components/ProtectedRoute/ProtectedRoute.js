import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function ProtectedRoute() {
  const currentUser = useContext(CurrentUserContext);
  if (currentUser.isLoggedIn === undefined) {
    return;
  }
  return currentUser.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}