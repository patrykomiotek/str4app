// App -> N.. -> AuthInfo -> M... -> AuthCredentials

import { Button } from "@mui/material";
import { useAuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();
  // context.

  return (
    <div>
      <p>Is user authenticated: {context.isAuthenticated ? "YES" : "NO"}</p>
      <Button variant="contained" onClick={() => context.toggle()}>
        Toggle value
      </Button>
    </div>
  );
};
