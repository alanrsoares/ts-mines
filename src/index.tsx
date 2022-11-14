import React from "react";
import { createRoot } from "react-dom/client";

import Splash from "ui/components/Splash";

import pkg from "../package.json";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const App = React.lazy(() => import("./App"));

const container = document.getElementById("root");

global.appVersion = pkg.version;

if (container) {
  const app = (
    <React.Suspense fallback={<Splash />}>
      <App />
    </React.Suspense>
  );
  createRoot(container).render(app);
  registerServiceWorker();
}
