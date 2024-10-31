import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import {
  createTheme,
  Button as Kaczke,
  // makeStyles,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AuthProvider } from "./components/Auth/AuthContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeProvider as CustomThemeProvider } from "@components/Theme/ThemeContext";
import { store } from "./store";
import { router } from "routes";
import { client } from "./graphQL";

import "./App.css";

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
