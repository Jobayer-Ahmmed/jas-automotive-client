import { useLoaderData } from "react-router-dom"
import SeeAllCar from "./SeeAllCar"



const SeeAllCars = () => {
    const cars = useLoaderData()
  
  return (
    
        <div className="mx-xPadding2 md:mx-xPadding my-myMargin grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">
            {
                cars.map(car=><SeeAllCar key={car._id} car={car}/>)
            }
        </div>        

  )
}

export default SeeAllCars