import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./style/theme";
import GlobalStyles from "./style/global";

import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";

import { PlateProvider } from "./hooks/plateRequest";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AuthProvider>
        <PlateProvider>
          <Routes />
        </PlateProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
