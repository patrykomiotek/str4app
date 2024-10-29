import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createTheme,
  Button as Kaczke,
  // makeStyles,
  ThemeProvider,
} from "@mui/material";

import { Button, Input } from "./ui";
import { AuthContext } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";

const theme = createTheme();

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some CSS that accesses the theme
//   }
// });

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Kaczke variant="contained">Hello world</Kaczke>
      <div>
        {/* <AuthInfo /> */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <AuthContext.Provider value={{ isAuthenticated: true }}>
        <AuthInfo />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
