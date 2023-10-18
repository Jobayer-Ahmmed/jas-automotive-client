import Automotive from "./automotive/Automotive"
import Brands from "./brands/Brands"
import Slider from "./slider/Slider"

const Home = () => {
  return (
    <div>
      <Slider/>
      <Automotive/>
      <Brands/>
   
    </div>
  )
}

export default Home