import React, { StrictMode } from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "ui/theme";
import { Splash, SplashBrand } from "ui/components/core";

import { version } from "../package.json";

import registerServiceWorker from "./registerServiceWorker";
import "./styles.css";

const App = React.lazy(() => import("./App"));

// add appVersion to global scope
global.appVersion = version;

const rootElement = document.getElementById("root");

const fallback = (
  <Splash>
    <SplashBrand>[M]</SplashBrand>
  </Splash>
);

const app = (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={fallback}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  </StrictMode>
);

render(app, rootElement);

registerServiceWorker();
