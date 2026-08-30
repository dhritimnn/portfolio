import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ObserverManager from "./components/ObserverManager";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ObserverManager />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <Navbar />
        <ObserverManager />
        <Blogs />
        <Footer />
      </>
    ),
  },
]);

export default routes;
