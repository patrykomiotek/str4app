import { createContext, useContext } from "react";

type AuthContext = {
  isAuthenticated: boolean;
};

// default values
export const AuthContext = createContext<AuthContext | null>(null);

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

// AuthContext.Provider
// AuthContext.displayName
