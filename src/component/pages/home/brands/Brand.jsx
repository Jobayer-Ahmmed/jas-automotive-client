
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Brand = ({aBrand}) => {
  const {name, logo} = aBrand
  const naviagte = useNavigate()
 
  

  return (

      <div onClick={()=>naviagte(`/car-show/${name}`)} className="w-full bg-textColor shadow-xl rounded-sm cursor-pointer">
        <figure className="flex justify-center pt-10">
          <img
            src={logo}
            alt="brand_image"
            className="h-36"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>

  );
};
Brand.propTypes={
  aBrand:PropTypes.object
}
export default Brand;
