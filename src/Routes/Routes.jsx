
import { createBrowserRouter } from "react-router";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home";



let router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
    
  
  },
]);


export default router;