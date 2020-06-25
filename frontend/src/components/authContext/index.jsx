import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [authentication, setAuthentication] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        authenticated: authentication,
        setAuthentication,
      }}
      {...props}
    />
  );
};
