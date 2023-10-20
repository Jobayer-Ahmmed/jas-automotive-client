import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import AddProduct from "../pages/addProduct/AddProduct";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import MyCarts from "../pages/myCart/MyCarts";
import URL from "../../url/URL";
import SeeAllCars from "../pages/seeAllCar/SeeAllCars";
import BrandCarsShow from "../pages/home/brands/BrandCarsShow";



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
                element:<PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path:"/see-all-car",
                element:<SeeAllCars/>,
                loader:async ()=> fetch(`${URL}/car`)
            },
            {
                path:"/my-cart",
                element:<MyCarts/>,
            },
            {
                path:"/car-show/:brandName",
                element:<BrandCarsShow/>,
                loader: async ({params})=> fetch(`${URL}/car-show/${params.brandName}`)
                
            }
        ]
    }
])

export default routes