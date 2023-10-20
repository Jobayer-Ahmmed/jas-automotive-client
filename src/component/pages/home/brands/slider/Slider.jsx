
import SimpleImageSlider from "react-simple-image-slider";
const Slider=()=>{
   const sliderImages = [
     {url: "https://i.ibb.co/NYddJhp/car4.png"},
     {url: "https://i.ibb.co/gwzQMR7/car3.png"},
     {url: "https://i.ibb.co/6Xd3tf1/car2.png"},
     {url: "https://i.ibb.co/0DS13Jp/car1.png"},

   ];
   return (
      <div className="">
      <div className="w-full relative">

         <SimpleImageSlider
            width={"100%"}
            height={"90vh"}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={10} // 10 second por por slide hobe
         />
      </div>
      </div>
   );
}
export default Slider