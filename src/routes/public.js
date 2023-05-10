import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

// These are routes 
// Made with array of objects
// Objects take these
// path: url , element: <Component/> , children: [{},{}, ...] same format in children
export const publicRoutes = [
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  { path: "*", element: <NotFound /> },
];
