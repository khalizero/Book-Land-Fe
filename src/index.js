import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import store from "./store";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* This  provider component below comes from react redux required for provinding store to application */}
    <Provider store={store}>

      {/* This Browser router component comes from react router which is required for routing. */}
      <BrowserRouter>
      
      {/* Theme provider is providing the custom theme we created to our app */}
        <ThemeProvider theme={theme}>
          
          {/* Our App file */}
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
