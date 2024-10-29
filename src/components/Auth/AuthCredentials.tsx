// App -> N.. -> AuthInfo -> M... -> AuthCredentials

import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return <p>Is user authenticated: {context.isAuthenticated ? "YES" : "NO"}</p>;
};
