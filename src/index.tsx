import React, { StrictMode } from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import "normalize.css";

import registerServiceWorker from "registerServiceWorker";

import App from "App";
import theme from "ui/theme";

import { version } from "../package.json";

// add appVersion to global scope
global.appVersion = version;

const rootElement = document.getElementById("root");

const app = (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

render(app, rootElement);

registerServiceWorker();
