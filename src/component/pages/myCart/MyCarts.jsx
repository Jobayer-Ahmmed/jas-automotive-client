
import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Swal from 'sweetalert2'
import URL from "../../../url/URL"


const MyCarts = () => {
  const myCartsData = useLoaderData()
  const [cars, setCars] = useState(myCartsData)
  const handleDelete =(deleteId)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {


      fetch(`${URL}/my-cart/${deleteId}`,{
        method:"DELETE"
      })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
              console.log("i am in delete")
              if(data.deletedCount > 0){
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaing = cars.filter(d=> d._id != deleteId)
                      setCars(remaing)
                    }
              }
            }
          )
      })

  }
  return (
    <div className="px-xPadding my-myMargin">
      
      {
        cars.length? cars.map(car=>{
          return(
            <div key={car._id}  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col justify-between  w-full bg-textColor shadow-xl">
                <figure className='w-full h-48'><img className='w-full h-full' src={car.photo} alt="car-image" /></figure>
                <div className='p-4'>
                  <h2 className="text-lg">Car Name : {car.name}</h2>
                  <h2 className="text-lg">Brand : {car.brand}</h2>
                  <h2 className="text-lg">Type : {car.type}</h2>
                  <h2 className="text-lg">Rating : {car.rating}</h2>
                  <h2 className="text-lg">Price : {car.price}</h2>   
                </div>
                <div className="card-actions justify-end p-4">
                  <button onClick={()=>handleDelete(car._id)} className="btn btn-primary">Delete</button>
                </div>
             </div>
            </div>
          )
        })
        : 
        <div className="w-[300px] md:w-[500px] lg:w-[900px] mx-auto h-[30vh] bg-textColor text-deepGray text-2xl flex justify-center items-center">
                    <h3>Your cart is empty</h3>
        </div>
      }
    </div>
  )
}

export default MyCarts