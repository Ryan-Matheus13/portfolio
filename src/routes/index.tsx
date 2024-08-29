import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Portfolio from "../layout/Portfolio";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Portfolio />,
        errorElement: "",
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
