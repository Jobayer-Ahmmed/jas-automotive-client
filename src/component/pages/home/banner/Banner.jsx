import video from "../../../../assets/bannerVideo/Autonomous.mp4"

const Banner = () => {
  return (
    <div>
    <video src={video} autoPlay loop muted />
  </div>
  )
}

export default Banner