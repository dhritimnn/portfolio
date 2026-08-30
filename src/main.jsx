import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./App.jsx";

import App from "./App.jsx";

const router = routes;
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
