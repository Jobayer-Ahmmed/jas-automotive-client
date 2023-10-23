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
import SeeDetails from "../pages/home/brands/SeeDetails";
import Update from "../pages/update/Update";
import ErrorPage from "../pages/errorPage/ErrorPage";
import SpecialCar from "../pages/home/consumer/SpecialCar";



const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>,

            },
            {
                path:"/special-car",
                element:<SpecialCar/>
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
                path:"/my-cart/:username",
                element:<PrivateRoute><MyCarts/></PrivateRoute>,
                loader:async ({params})=> fetch(`${URL}/my-cart/${params.username}`)
            },
            {
                path:"/car-show/:brandName",
                element:<BrandCarsShow/>,
                loader: async ({params})=> fetch(`${URL}/car-show/${params.brandName}`)
                
            },
            {
                path:"/details/:carId",
                element:<PrivateRoute><SeeDetails/></PrivateRoute>,
                loader: async ({params})=> fetch(`${URL}/details/${params.carId}`)

            },
            {
                path:"/edit/:carId",
                element:<PrivateRoute><Update/></PrivateRoute>,
                loader: async ({params})=> fetch(`${URL}/edit/${params.carId}`)
            }
        ]
    }
])

export default routes