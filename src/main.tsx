import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MAINTENANCE_MODE } from "../maintenance.config";
import Maintenance from "./pages/Maintenance";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {MAINTENANCE_MODE ? <Maintenance /> : <App />}
  </React.StrictMode>
);
