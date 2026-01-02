import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext";
import AuthGate from "./components/AuthGate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <BrowserRouter>
        <AuthGate>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </AuthGate>
      </BrowserRouter>
    </GeneralContextProvider>
  </React.StrictMode>
);
