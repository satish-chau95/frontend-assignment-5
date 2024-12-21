import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  user: null,
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (provider) => {
    setIsAuthenticated(true);
    setUser({
      name: "UtkarshDhairyaPanwar",
      email: "user@example.com",
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

