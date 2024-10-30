import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import {
  createTheme,
  Button as Kaczke,
  // makeStyles,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AuthProvider } from "./components/Auth/AuthContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeProvider as CustomThemeProvider } from "@components/Theme/ThemeContext";
import { store } from "./store";
import { router } from "routes";

import "./App.css";

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

const queryClient = new QueryClient();

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
      <HelmetProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ApolloProvider client={client}>
              <MuiThemeProvider theme={theme}>
                <AuthProvider>
                  <CustomThemeProvider>
                    <RouterProvider router={router} />
                  </CustomThemeProvider>
                </AuthProvider>

                {/* <RegistrationForm />
              <DisplayFilms />
              <Kaczke variant="contained">Hello world</Kaczke> */}
                {/* <AuthProvider>
                <AuthInfo />
              </AuthProvider> */}
              </MuiThemeProvider>
            </ApolloProvider>
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </Provider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
