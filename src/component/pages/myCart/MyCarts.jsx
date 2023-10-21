
import { useLoaderData } from "react-router-dom"
import MyCart from "./MyCart"

const MyCarts = () => {
  const myCartsData = useLoaderData()
  console.log(myCartsData)
  return (
    <div className="px-xPadding my-myMargin">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {
        myCartsData.length? myCartsData.map(car=><MyCart key={car._id} car={car}/>)
        : 
        <div>
          <h2>Your cart is empty</h2>
        </div>
      }
    </div>
    </div>
  )
}

export default MyCarts