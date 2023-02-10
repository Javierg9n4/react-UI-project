import useToken from "./useToken";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token, removeToken, isExpired } = useToken();

  if (!token || isExpired) {
    removeToken();
    window.location.reload(true);
  }

  return <Outlet />;
};

export default ProtectedRoute;
