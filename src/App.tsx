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
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { Button, Input } from "./ui";
// import { AuthContext } from "./components/Auth/AuthContext";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { AuthProvider } from "./components/Auth/AuthContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { DisplayFilms } from "./components/DisplayFilms";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import { SubmitHandler } from "react-hook-form";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     // eslint-disable-next-line array-callback-return
//     graphqlErrors.map(({ message, location, path }) => {
//       console.error(`GraphQL error: ${path}, ${location}, ${message}`);
//     });
//   }
//   if (networkError) {
//     console.log("Network error");
//   }
// });
const link = from([
  // errorLink,
  new HttpLink({
    // uri: "https://flyby-router-demo.herokuapp.com/",
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  }),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  devtools: {
    enabled: true,
  },
});

const theme = createTheme();

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some CSS that accesses the theme
//   }
// });

function App() {
  const [count, setCount] = useState(0);

  // const handleFormData: SubmitHandler<RegistrationFormDto> = async (data) => {
  //   console.log({ data });
  // };

  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <RegistrationForm />
          <DisplayFilms />
          <br />
          <br />
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
          <AuthProvider>
            <AuthInfo />
          </AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default App;
