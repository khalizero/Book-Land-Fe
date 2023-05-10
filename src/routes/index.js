import { publicRoutes } from "./public.js";
import { privateRoutes } from "./private.js";
import NotFound from "../pages/NotFound";
import BlankLayout from "../layouts/BlankLayout.jsx";
import AuthGuard from "../layouts/AuthGuard";

// These are routes 
// Made with array of objects
// Objects take these
// path: url , element: <Component/> , children: [{},{}, ...] same format in children

const routes = [
  {
    path: "/",
    element: <AuthGuard />,
    children: privateRoutes,
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: publicRoutes,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
