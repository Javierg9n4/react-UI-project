import { useState } from "react";
import { useJwt } from "react-jwt";
import getToken from "../../utils/getToken";

const useToken = () => {
  const [token, setToken] = useState(getToken());
  const { decodedToken, isExpired } = useJwt(token);

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken?.token);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return {
    setToken: saveToken,
    token: getToken(),
    user: decodedToken?.user,
    removeToken,
    isExpired,
  };
};

export default useToken;
