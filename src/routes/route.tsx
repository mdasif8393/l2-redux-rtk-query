import App from "@/App";
import Login from "@/pages/Login";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default routes;