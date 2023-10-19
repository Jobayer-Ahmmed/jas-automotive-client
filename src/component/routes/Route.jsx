import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import AddProduct from "../pages/addProduct/AddProduct";
import Login from "../pages/home/login/Login";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>,

            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/add-product",
                element:<AddProduct/>
            }
        ]
    }
])

export default routes