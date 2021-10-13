import React, { createContext } from "react";
import { useLocalStorageState } from "./utils";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useLocalStorageState('user',"");
  const [token, setToken] = useLocalStorageState("token", "");
  const [loggedIn, setLoggedIn] = useLocalStorageState("loggedIn", false);

  return (
    <UserContext.Provider
      value={{
        name,
        token,
        loggedIn,
        setName,
        setToken,
        setLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};