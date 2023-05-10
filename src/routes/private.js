import React from "react-router-dom";

import NotFound from "../pages/NotFound";

import Home from "../pages/Home";
import Books from "../pages/Books";


// These are routes 
// Made with array of objects
// Objects take these
// path: url , element: <Component/> , children: [{},{}, ...] same format in children
export const privateRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "books",
    element: <Books />,
  },
  { path: "*", element: <NotFound /> },
];
