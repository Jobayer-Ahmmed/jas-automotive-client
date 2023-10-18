import {MdBuild} from "react-icons/md"
import {FaSearch} from "react-icons/fa"
import {BiSolidCarGarage} from "react-icons/bi"
import {BsPeopleFill} from "react-icons/bs"
import {AiFillCar} from "react-icons/ai"
import { Link } from "react-router-dom"

const Consumer = () => {
  return (
    <div className="px-xPadding mb-myMargin">
        <h1 className="text-textColor text-3xl font-bold text-center mb-mtMargin">Consumer Toolkit</h1>
        <div className="flex md:flex-row flex-col justify-center items-center bg-textColor p-10 rounded-sm text-lg font-medium">
            <div className=" w-full text-center">
                <div className="text-4xl"><AiFillCar className="inline"/><MdBuild className="inline"/></div>
                <Link to="" className="mt-2">Contact with a company to build your special car</Link>
            </div>
            <div className="bg-deepGray md:w-2 md:h-40 md:mx-5 w-40 h-[2px] my-7"></div>
            <div className="w-full text-center">
                <div className="text-4xl"><BiSolidCarGarage className="inline"/><FaSearch className="inline"/></div>
                <Link to=""  className="mt-2">Find your dreaming car</Link>
            </div>
            <div className="bg-deepGray md:w-2 md:h-40 md:mx-5 w-40 h-[2px] my-7"></div>
            <div className="bg-deepGray w-[2px] h-[90%]"></div>
            <div className=" w-full text-center">
                <div className="text-4xl"><BsPeopleFill className="inline"/><FaSearch className="inline"/></div>
                <Link to=""  className="mt-2">Find the car dealer</Link>
            </div>
        </div>
    </div>
  )
}

export default Consumer