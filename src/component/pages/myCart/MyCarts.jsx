import { useLoaderData } from "react-router-dom"
import MyCart from "./MyCart"


const MyCarts = () => {
    const cars = useLoaderData()
  
  return (
    
        <div className="mx-xPadding2 md:mx-xPadding my-myMargin grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6">
            {
                cars.map(car=><MyCart key={car._id} car={car}/>)
            }
        </div>        

  )
}

export default MyCarts