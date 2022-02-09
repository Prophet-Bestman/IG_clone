import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.development";
// import { USER_INITIAL_STATE } from "./auth.reducer";

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
