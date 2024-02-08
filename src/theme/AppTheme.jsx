import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./";
import { ThemeProvider } from "@emotion/react";
//const { ThemeProvider } = require("@emotion/react");

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
