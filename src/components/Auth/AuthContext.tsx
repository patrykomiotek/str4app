import { createContext, useContext, useState } from "react";

type AuthContext = {
  isAuthenticated: boolean;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
};

// default values
const AuthContext = createContext<AuthContext | null>(null);

class ReactContextError extends Error {}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new ReactContextError(
    "Oh no! Component should be placed inside Auth Context"
  );
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggle = () => setIsLoggedIn((value) => !value);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isLoggedIn, toggle, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext.Provider
// AuthContext.displayName
