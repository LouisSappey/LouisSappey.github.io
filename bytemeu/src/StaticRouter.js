import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

const Static = ({ url }) => {
  const cleanUrl = url.split("#")[0];

  return (
    <StaticRouter location={cleanUrl}>
      <App />
    </StaticRouter>
  );
};

export default Static;
