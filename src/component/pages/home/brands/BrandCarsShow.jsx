
import {useLoaderData} from "react-router-dom"
import BrandCarShow from "./BrandCarShow"
import Slider from "./slider/Slider"


const BrandCarsShow = () => {
  const carsData = useLoaderData()
  const brand =  carsData[0].brand
  console.log(carsData)

  return (
    <div className="flex justify-between px-xPadding my-myMargin">
        <div>
            <Slider/>
            <h1 className="text-textColor text-3xl font-bold text-center mb-mtMargin">
                Automotive cars of {brand} 
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                  carsData?.map(car=><BrandCarShow key={car._id} car={car}/>)
                }
            </div>
            </div>
    </div>
  )
}

export default BrandCarsShow