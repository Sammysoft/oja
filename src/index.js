import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import DesktopView from "./Desktop";
import Mobile from "./Mobile";
import { BrowserView, MobileView } from "react-device-detect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BrowserView>
        <DesktopView />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </BrowserRouter>
  </React.StrictMode>
);
