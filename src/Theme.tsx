import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#30b4ff",
    primaryHover: "#4fc3f7",
    success: "#5aac44",
    successHover: "#81c784",
    warning: "#ff8a65",
    danger: "#ff8a65",
    white: "#fff",
    gray: "#eff3f8",
  },
};

type ThemeProps = {
  children: React.ReactNode;
};
const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
