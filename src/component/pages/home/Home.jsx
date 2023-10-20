import Automotive from "./automotive/Automotive"
import Banner from "./banner/Banner"
import Brands from "./brands/Brands"
import Consumer from "./consumer/Consumer"


const Home = () => {
  return (
    <div>
      <Banner/>
      <Automotive/>
      <Brands/>
      <Consumer/>
    </div>
  )
}

export default Home