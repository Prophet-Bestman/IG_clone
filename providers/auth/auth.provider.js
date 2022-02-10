import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext("USER_INITIAL_STATE");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
