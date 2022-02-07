import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext("USER_INITIAL_STATE");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <AuthContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
