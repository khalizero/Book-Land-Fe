import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5956e9",
    },
    warning: {
      main: "#605cef",
    },
    secondary: {
      main: "#1EBEC1",
    },
    success: {
      main: "#2F6C00",
    },
    info: {
      main: "#191C1C",
      500: "#3F4848",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      fontSize: 14,
      fontWeight: 600,
      textTransform: "none",
    },
    h1: {
      fontSize: 28,
      fontWeight: 500,
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
    },
    h3: {
      fontSize: 22,
      fontWeight: 500,
    },
    h4: {
      fontSize: 12,
      fontWeight: 700,
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 12,
      color: "#6F7979",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 700,
      color: "#3F4949",
    },
    body1: {
      fontSize: 14,
      fontWeight: 500,
      color: "#3F4949",
    },
    body2: {
      fontSize: 14,
      fontWeight: 700,
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
      color: "#191C1C",
    },
    h6: {
      fontSize: 32,
      fontWeight: 500,
    },
  },
});
export default theme;
