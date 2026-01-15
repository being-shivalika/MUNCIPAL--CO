import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import CitizenDashboard from "./pages/CitizenDashboard.jsx";
import Login from "./components/Login.jsx";
import MainHero from "./pages/MainHero.jsx";
import TrackRequest from "./pages/TrackRequest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainHero /> },
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/Track", element: <TrackRequest /> },
    ],
  },
  { path: "/citizen", element: <CitizenDashboard /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
