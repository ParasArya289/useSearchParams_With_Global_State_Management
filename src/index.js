import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./filterContext/filterContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </BrowserRouter>
  </StrictMode>
);
