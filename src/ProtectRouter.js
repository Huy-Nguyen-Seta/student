import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateProtectedRouter() {
  const { userInfo } = useSelector((state) => state.userLogin);
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
}

function AdminProtectedRouter() {
  const { userInfo } = useSelector((state) => state.userLogin);
  return userInfo?.isAdmin ? <Outlet /> : <Navigate to="/*" />;
}
export { AdminProtectedRouter, PrivateProtectedRouter };
