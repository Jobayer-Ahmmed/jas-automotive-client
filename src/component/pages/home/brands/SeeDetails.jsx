import { useLoaderData } from "react-router-dom"


const SeeDetails = () => {
    const car = useLoaderData()
    const {name, photo, price, type, description, rating, brand} = car
  return (
<div className="px-xPadding pb-xPadding">
<div className="  w-full bg-textColor">
    <figure className='w-full lg:h-[450px]'><img className='w-full h-full' src={photo} alt="car-image" /></figure>
    <div className='p-4 md:p-14'>
      <h2 className="text-lg">Car Name : {name}</h2>
      <h2 className="text-lg">Brand : {brand}</h2>
      <h2 className="text-lg">Type : {type}</h2>
      <h2 className="text-lg">Rating : {rating}</h2>
      <h2 className="text-lg">Price : {price}</h2>
      <p className='mt-3'>{description}</p>    
    </div>
        <div className="flex justify-center pb-xPadding">
             <button className="btn btn-primary">Add to Cart</button>
        </div>
    </div>
</div>
  )
}

export default SeeDetails