import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import AddProduct from "../pages/addProduct/AddProduct";


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