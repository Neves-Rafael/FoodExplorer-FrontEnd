import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import GlobalStyles from "./style/global";

import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";

import { PlateProvider } from "./hooks/plateRequest";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <AuthProvider>
        <PlateProvider>
          <Routes />
          <ToastContainer/>
        </PlateProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
