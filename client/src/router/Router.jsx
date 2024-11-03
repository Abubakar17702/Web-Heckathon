import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../components/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Login from "../components/Login";
import ForgetPassword from "../components/ForgetPassword";
import Testing from "../components/Testing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: (
          <PrivateRouter>
            <Testing />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);

export default router;
