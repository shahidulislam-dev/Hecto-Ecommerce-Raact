import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextApi } from "./Components/ContextApi.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ContextApi>
        <App />
      </ContextApi>
    </Provider>
  </StrictMode>
);
