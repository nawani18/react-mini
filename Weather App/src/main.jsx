import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import WeatherContext from "./Context/WeatherContext";

createRoot(document.getElementById("root")).render(
  <WeatherContext>
    <App />
    <ToastContainer />
  </WeatherContext>
);
