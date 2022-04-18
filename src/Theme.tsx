import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#30b4ff" },

    success: { main: "#5aac44" },
    // successHover: "#81c784",
    warning: { main: "#ff8a65" },
    info: { main: "#f9f9f9f" },
    // white: "#fff",
    // gray: "#eff3f8",
  },
  shape: {
    borderRadius: 5,
  },
});

type ThemeProps = {
  children: React.ReactNode;
};
const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
