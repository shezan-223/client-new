import { createBrowserRouter } from "react-router";
import Home from "./Home/Home";
import RootLayout from "./RootLayout";
import AllProperties from "./Home/AllProperties";

export const router =createBrowserRouter([

{
    path:"/",
    element:<RootLayout></RootLayout>,
    children:[

{
    index:true,
    element :<Home></Home>
},
{
    path: "/allProperties",
    element :<AllProperties></AllProperties>
}





    ]
    
}









])