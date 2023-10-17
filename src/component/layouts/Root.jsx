import { Outlet } from "react-router-dom"
import Footer from "../shared/footer/Footer"
import Navbar from "../shared/navbar/Navbar"


const Root = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root