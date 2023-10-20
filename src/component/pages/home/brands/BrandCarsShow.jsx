
import {useLoaderData} from "react-router-dom"
import BrandCarShow from "./BrandCarShow"


const BrandCarsShow = () => {
  const carsData = useLoaderData()

  console.log(carsData)

  return (
    <div className="flex justify-between px-xPadding my-myMargin">
        <div>
            <h1 className="text-textColor text-3xl font-bold text-center mb-mtMargin">
                The Most Popular Automotive Brands
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