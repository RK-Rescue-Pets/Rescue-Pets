import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/MyProvider.jsx";

createRoot(document.getElementById("root")).render(
  <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyProvider>
);
