import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


import NewsFeed from "../Pages/NewsFeed/NewsFeed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/newsfeed",
        element: <NewsFeed></NewsFeed>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ],
  },

]);
export default router;
