
import SimpleImageSlider from "react-simple-image-slider";
const Slider=()=>{
   const sliderImages = [
     {url: "https://i.ibb.co/NYddJhp/car4.png"},
     {url: "https://i.ibb.co/gwzQMR7/car3.png"},
     {url: "https://i.ibb.co/6Xd3tf1/car2.png"},
     {url: "https://i.ibb.co/0DS13Jp/car1.png"},

   ];
   let a= "100%"
   let b = "95vh"
   return (
      <div>
      <div className="w-full relative">
         <SimpleImageSlider
            width={a}
            height={b}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3} // 3 second por por slide hobe
         />
      </div>
      </div>
   );
}
export default Slider