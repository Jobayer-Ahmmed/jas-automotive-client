import PropTypes from 'prop-types';


const BrandCarShow = ({car}) => {

  console.log(car)
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
      <p className='mt-3'>{description}</p>    
    </div>
      <div className="card-actions justify-end p-4">
        <button className="btn btn-primary">Buy Now</button>
      </div>
  
  </div>
  )
}
BrandCarShow.propTypes = {
  car: PropTypes.object
}

export default BrandCarShow