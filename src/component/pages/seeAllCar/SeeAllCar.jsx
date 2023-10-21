import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SeeAllCar = ({car}) => {
  const {name, photo, price, type, description, rating, brand} = car
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
        <Link to={`/details/${name}`} className="btn btn-primary">See Details</Link>
        <Link to="" className="btn btn-primary">Update</Link>
      </div>

</div>
  )
}

SeeAllCar.propTypes = {
  car:PropTypes.object
}

export default SeeAllCar