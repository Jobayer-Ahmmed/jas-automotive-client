import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BrandCarShow = ({car}) => {


  // console.log(car)
  const { _id, name, photo, price, type, description, rating, brand} = car
  return (
    <div className="flex flex-col justify-between  w-full bg-textColor shadow-xl">
    <figure className='w-full h-48'><img className='w-full h-full' src={photo} alt="car-image" /></figure>
    <div className='p-4'>
      <h2 className="text-lg">Car Name : {name}</h2>
      <h2 className="text-lg">Brand : {brand}</h2>
      <h2 className="text-lg">Type : {type}</h2>
      <h2 className="text-lg">Rating : {rating}</h2>
      <h2 className="text-lg">Price : {price}</h2>
      <p className='mt-3'>{description.slice(0,60)} ....</p>    
    </div>
      <div className="card-actions justify-end p-4">
        <Link to={`/details/${_id}`} className="btn btn-primary">See Details</Link>
        <Link to={`/edit/${_id}`} className="btn btn-primary">Update</Link>
      </div>
  
  </div>
  )
}
BrandCarShow.propTypes = {
  car: PropTypes.object
}

export default BrandCarShow