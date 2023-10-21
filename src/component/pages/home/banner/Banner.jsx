import video from "../../../../assets/bannerVideo/Autonomous.mp4"

const Banner = () => {
  return (
    <div className="w-full flex justify-center">
    <video src={video} autoPlay loop muted width={`100%`} />
  </div>
  )
}

export default Banner