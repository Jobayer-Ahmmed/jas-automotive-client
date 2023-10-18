import Automotive from "./automotive/Automotive"
import Brands from "./brands/Brands"
import Consumer from "./consumer/Consumer"
import Slider from "./slider/Slider"

const Home = () => {
  return (
    <div>
      <Slider/>
      <Automotive/>
      <Brands/>
      <Consumer/>
    </div>
  )
}

export default Home