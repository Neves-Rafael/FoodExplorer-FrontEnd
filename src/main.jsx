import React from "react";
import { Routes } from "./routes";
import { theme } from "./style/theme";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./style/global";
import { AuthProvider } from "./hooks/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { PlateProvider } from "./hooks/plateRequest";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <PlateProvider>
          <Routes />
          <ToastContainer />
        </PlateProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
