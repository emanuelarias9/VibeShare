import { useState, useEffect, createContext } from "react";
import { apiClientService } from "../helpers/ApiClientService";
import { Global } from "../helpers/Global";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    const token = sessionStorage.getItem("token");
    const userSession = sessionStorage.getItem("user");

    if (!token || !userSession) {
      return false;
    }

    const userObj = JSON.parse(userSession);
    const userId = userObj.userId;
    const urlPeticion = `${Global.urlApiBase}/user/profile/${userId}`;
    const { apiResponse } = await apiClientService({
      urlPeticion: urlPeticion,
      token: token,
    });
    if (apiResponse.statusCode === 200) {
      setUser(apiResponse.user);
    }
  };
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
