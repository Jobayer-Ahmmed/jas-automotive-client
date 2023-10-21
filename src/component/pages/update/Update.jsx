import { useLoaderData } from 'react-router-dom';
import URL from '../../../url/URL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const getdata = useLoaderData()
    const {name, photo, brand, type, rating, price} = getdata
    const handleSubmit=e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const photo =form.get("photo")
        const brand =form.get("brand")
        const type =form.get("type")
        const rating =form.get("rating")
        const price =form.get("price")

        const data = {name, photo, brand, type, rating, price}
        console.log(data)
        fetch(`${URL}/car`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(()=>{
            toast.success("Update successfull")
        })
    }


  return (
    <div className="w-4/5 md:w-3/5 mx-auto my-myMargin">
        <div className="bg-textColor py-10 px-4 rounded-lg text-center">
            <h1  className=" text-2xl font-medium my-mtMargin">Add A Car</h1>
            <form onSubmit={handleSubmit}>
                <input className="w-4/5 h-10 pl-5 rounded" type="text" defaultValue={name} name="name" required/><br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" defaultValue={photo} name="photo" required /> <br />
                <input className="w-4/5 h-10 pl-5 rounded" type="text" defaultValue={brand} name="brand" required/> <br />
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" defaultValue={type}  name="type" required/><br/>
                <input className="my-2 w-4/5 h-10 pl-5 rounded" type="text" defaultValue={rating} name="rating" required /><br />
                <input className="w-4/5 h-10 pl-5 rounded" type="text" defaultValue={price} name="price" required /> <br />
                <input  className="mt-4 rounded-sm px-16  py-2 text-lg font-bold bg-[#DF6242] text-textColor cursor-pointer active:text-xl" type="submit" value="Update" />
            </form>
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

export default Update