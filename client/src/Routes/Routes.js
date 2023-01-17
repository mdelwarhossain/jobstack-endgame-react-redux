import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Pages/Home/Home";
<<<<<<< HEAD
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
=======
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
    ],
  },
>>>>>>> dd54635c6d453343ca6d3e1bd15e7c5a267125b8
]);
export default router;
