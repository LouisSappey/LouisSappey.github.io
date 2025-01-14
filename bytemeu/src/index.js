import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Static from "./StaticRouter";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const isSnap = navigator.userAgent === "ReactSnap";

if (isSnap) {
  const url = window.location.pathname;
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <Static url={url} />
    </React.StrictMode>
  );
} else {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(
      rootElement,
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

reportWebVitals();
