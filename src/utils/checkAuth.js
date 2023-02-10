import React from "react";
import useToken from "../components/App/useToken";
import Login from "../components/Login/Login";

const AuthChecker = () => {
  const { token, isExpired, setToken } = useToken();
  if (!token || isExpired) {
    return <Login setToken={setToken} />;
  }
};

export default AuthChecker;
