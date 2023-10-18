
import PropTypes from 'prop-types';

const Brand = ({aBrand}) => {
  const {name, logo} = aBrand
  return (

      <div className="w-full bg-textColor shadow-xl rounded-sm">
        <figure className="flex justify-center pt-10">
          <img
            src={logo}
            alt="Shoes"
            className="h-36"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          {/* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>

  );
};
Brand.propTypes={
  aBrand:PropTypes.object
}
export default Brand;
