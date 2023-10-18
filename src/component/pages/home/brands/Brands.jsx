import { useEffect, useState } from "react"
import URL from "../../../../url/URL"
import Brand from "./Brand"

const Brands = () => {
    const [brand, setBrand] = useState([])

    useEffect(()=>{
        fetch(`${URL}/brand`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBrand(data)
        })
    },[])
        

    
  return (
    <div className="flex justify-between px-xPadding my-myMargin">
        <div>
            <h1 className="text-textColor text-3xl font-bold text-center mb-mtMargin">
                The Most Popular Automotive Brands
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    brand?.map(aBrand=><Brand key={aBrand._id} aBrand={aBrand}/>)
                }
            </div>
            </div>
    </div>
  )
}

export default Brands