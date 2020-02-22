import React from "react";
import { render } from "react-dom";

import { version } from "../package.json";

import registerServiceWorker from "./registerServiceWorker";
import Splash from "ui/components/Splash";

const App = React.lazy(() => import("./App"));

// add appVersion to global scope
global.appVersion = version;

const rootElement = document.getElementById("root");

const fallback = <Splash />;

const app = (
  <React.Suspense fallback={fallback}>
    <App />
  </React.Suspense>
);

render(app, rootElement);

registerServiceWorker();
