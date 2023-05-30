import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { css } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className={css.container}>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </div>
);
