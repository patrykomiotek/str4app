// App -> N.. -> AuthInfo -> M... -> AuthCredentials

import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return <p>Is user authenticated: {context.isAuthenticated ? "YES" : "NO"}</p>;
};
