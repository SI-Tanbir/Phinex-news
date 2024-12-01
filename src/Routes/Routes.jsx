
import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";



let router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
        ,
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/:id',
          element:<PrivateRoute><News></News></PrivateRoute>
          
        }
    ]
    
  
  },
]);


export default router;