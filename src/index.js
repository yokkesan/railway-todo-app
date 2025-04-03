import React from "react";
import ReactDOM from "react-dom/client";//追加
import "./index.css";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { store } from "./store";
import { Router } from "./routes/Router";//追加

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <Router />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);