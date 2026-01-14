import { createBrowserRouter } from "react-router";
import Home from "./Home/Home";
import RootLayout from "./RootLayout";
import AllProperties from "./Home/AllProperties";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Logout from "./Auth/Logout";
import AddProperty from "./AddProperty";
import PrivateRoute from "./PrivateRoute";

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
},
{
    path:"/addproperty",
    element:
    <PrivateRoute>

        <AddProperty></AddProperty>
    </PrivateRoute>

},

{
element: <AuthLayout></AuthLayout>,
children:[

    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element: <Register></Register>
    },
    {
        path:"logout",
        element: <Logout></Logout>
    }



]



}





    ]
    
}









])