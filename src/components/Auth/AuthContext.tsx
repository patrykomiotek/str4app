import { createContext } from "react";

type AuthContext = {
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContext>({
  isAuthenticated: false,
});
