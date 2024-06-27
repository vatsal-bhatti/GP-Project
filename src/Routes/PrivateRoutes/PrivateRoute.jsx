import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
