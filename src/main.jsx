import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "@asgardeo/auth-react";

const config = {
  signInRedirectURL: "http://localhost:5173/",
  signOutRedirectURL: "http://localhost:5173/",
  clientID: "H2fxpHMeZU0E4J9mdVI1LrfGqQAa",
  baseUrl: "https://api.asgardeo.io/t/reactatxhari",
  scope: ["openid", "profile"],
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider config={config}>
      <App />
    </AuthProvider>
  </StrictMode>
);
