import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-wap9g4vv.us.auth0.com"
    clientId="D2NOk64UA8n3CclENmjHz5Z9SLEYofCk"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
