import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../../Mainlayout";
import Home from "../component/Home";
import SignIn from "../component/SignIn";
import Login from "../component/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout/>,
      children:[
        {
            path: "/",
            element: <Home/>,
            children: [
                {
                    path: "/",
                    element: <SignIn/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
            ]
        },
      ]
    },
  ]);

  export default router;