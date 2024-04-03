import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planet from "../pages/Planet";
import Home from "../pages/Home";
import Picture from "../pages/Picture";
import Blog from "../pages/Blog";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Upload from "../pages/Upload";
import Login from "../pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planet",
        element: <Planet />,
      },
      {
        path: "/picture",
        element: <Picture />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/write",
        element: <Upload />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
