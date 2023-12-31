import {
 Navigate,
 createBrowserRouter,
} from "react-router-dom";

import App from './App'

import { ErrorComponent } from "./components/error";

import { PageNotFound } from "./pages/not-found";
import { PageHome } from "./pages/home";
import { PageLogin } from "./pages/login";
import { PageUser } from "./pages/user";
import { AuthRouteComponent } from "./components/auth-route";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <PageNotFound />,
  children: [
   {
    path: "/",
    element: <PageHome />
   },
   {
    path: "/login",
    element: <PageLogin />
   },
   {
    path: "/user",
    element: <AuthRouteComponent redirect={"/login"}>
     <PageUser />
    </AuthRouteComponent>
   },
   {
    path: "/404",
    element: <ErrorComponent />
   },
   {
    path: "/*",
    element: <Navigate to="/404" replace />
   }
  ]
 },

]);

export { router }
