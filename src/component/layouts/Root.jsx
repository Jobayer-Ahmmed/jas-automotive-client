import { Outlet } from "react-router-dom"
import Footer from "../shared/footer/Footer"
import Navbar from "../shared/navbar/Navbar"


const Root = () => {
  return (
    <div className="bg-deepGray">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root