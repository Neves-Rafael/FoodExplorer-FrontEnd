import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./style/theme";
import GlobalStyles from "./style/global";

import { SignIn } from "./pages/SignIn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>
);
