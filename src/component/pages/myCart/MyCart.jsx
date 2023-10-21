import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyCart = ({car}) => {

  const handleDelete=id=>{
    fetch(`${URL}/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(()=>{
      toast.success("Delete successfull")
    })
  }

  // console.log(car)
  const { _id, name, photo, price, type, rating, brand} = car
  return (
    <div className="flex flex-col justify-between  w-full bg-textColor shadow-xl">
    <figure className='w-full h-48'><img className='w-full h-full' src={photo} alt="car-image" /></figure>
    <div className='p-4'>
      <h2 className="text-lg">Car Name : {name}</h2>
      <h2 className="text-lg">Brand : {brand}</h2>
      <h2 className="text-lg">Type : {type}</h2>
      <h2 className="text-lg">Rating : {rating}</h2>
      <h2 className="text-lg">Price : {price}</h2>   
    </div>
      <div className="card-actions justify-end p-4">
        <Link onClick={()=>handleDelete(`/my-cart/${_id}`)} className="btn btn-primary">Delete</Link>
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
MyCart.propTypes = {
  car: PropTypes.object
}

export default MyCart