export interface AuthCredentials {
  isAuthenticated: boolean;
}
function AuthCredentials(props: Readonly<AuthCredentials>) {
  return <>{props.isAuthenticated ? "" : "not "} authenticated</>;
}
export default AuthCredentials;

import AuthCredentials from "./AuthCredentials";
function AuthInfo() {
  return <AuthCredentials isAuthenticated={true} />;
}
export default AuthInfo;
