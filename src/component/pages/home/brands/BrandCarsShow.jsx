
import {useLoaderData} from "react-router-dom"
import BrandCarShow from "./BrandCarShow"
import Slider from "./slider/Slider"



const BrandCarsShow = () => {
  const carsData = useLoaderData()
  let brand
  if(carsData.length){
     brand =  carsData[0].brand
  }
  else{
     brand = "Mazda"
  }


  return (
    <div className=" mb-myMargin">
        <Slider/>
        <h1 className="text-textColor text-3xl font-bold text-center mt-myMargin mb-mtMargin">
                Automotive cars of {brand} 
        </h1>
        {
          carsData.length? '':    
                  <div className="w-[300px] md:w-[500px] lg:w-[900px] mx-auto h-[30vh] bg-textColor text-deepGray text-2xl flex justify-center items-center">
                    <h3>There is no car of <span className="font-bold">{brand}</span> at now.</h3>
                  </div>
        }
        <div className="flex justify-between px-xPadding">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                  carsData.length? 
                  carsData?.map(car=><BrandCarShow key={car._id} car={car}/>)
                  : ''

                }
            </div>
            </div>
    </div>
  )
}

export default BrandCarsShow