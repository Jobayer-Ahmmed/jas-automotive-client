import {  useLoaderData } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import URL from "../../../../url/URL";
import { useContext } from "react";
import { MyContext } from "../../../contextApi/MyAuthProvider";

const SeeDetails = () => {
    const { myUser} = useContext(MyContext);
    const username =  myUser.displayName
    const carGet = useLoaderData()
    const { name, photo, price, type, description, rating, brand} = carGet
    const car = { username, name, photo, price, type, description, rating, brand,}

    const handleCart=()=>{
      fetch(`${URL}/my-cart`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(car)
      })
      .then(res=>res.json())
      .then((data)=>{
        console.log(data)
        toast.success("You successfully added this car in you cart!")
      })
    }


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