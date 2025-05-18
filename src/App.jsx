import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./pages/notFound";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "*",
    element: <NotFound/>
  }, 
   {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
