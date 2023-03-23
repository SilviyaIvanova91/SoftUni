import { createContext, useContext, useState } from "react";
import { authServiceFactory } from "../services/authServices";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  // const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.accessToken);
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log("There is a problem");
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);
      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log("There is a problem");
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
