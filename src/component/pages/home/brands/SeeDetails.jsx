import { useLoaderData, useParams } from "react-router-dom"
import { getCar, saveCar } from "../../../localstorage/localStorage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SeeDetails = () => {
    const car = useLoaderData()
    const carNameGet = useParams()
    const {name:carName} = carNameGet
    console.log(carName)

   
    const handleCart=()=>{
      const nameArr = getCar()
      console.log(nameArr)
      saveCar(carName)
      if(nameArr.includes(carName)){
        toast.warn("You have alredy added this car in Your cart")
      }
      else{
        toast.success("You successfully added this car in you cart!")
      }
    }
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
             <button onClick={handleCart}  className="btn btn-primary">Add to Cart</button>
        </div>
    </div>

    <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />

</div>
  )
}

export default SeeDetails