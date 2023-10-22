import {MdBuild} from "react-icons/md"
import {AiFillCar} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"

const Consumer = () => {
    const navigate = useNavigate()
  return (
    <div className="px-xPadding mb-myMargin">
        <h1 className=" text-3xl font-bold text-center mb-mtMargin">Consumer Toolkit</h1>
        <div className="flex  justify-center items-center bg-textColor p-10 rounded-sm text-lg font-medium">
            <div onClick={()=>navigate("/special-car")} className=" w-full text-center">
                <div className="text-4xl"><AiFillCar className="inline"/><MdBuild className="inline"/></div>
                <Link  className="mt-2">Contact with a company to build your special car</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Consumer